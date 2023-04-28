import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/sharedservices/login.service';
import { ProductService } from 'src/app/sharedservices/product.service';
import { SellerserviceService } from 'src/app/sharedservices/sellerservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartItemNumberShow:any;
sellerName:any;
sellerLogged:any;
userLogged:any;
userName:any;
  constructor(private seller:SellerserviceService,private user:LoginService, private product:ProductService, private router:Router) { }
menuType ='default';
  ngOnInit(): void {   
    this.router.events.subscribe((res:any)=>{
      console.log(res);
      if(res.url){
        this.sellerLogged = this.seller.getsellerregisterlocal();
        this.userLogged = this.user.getuserRegister();
        console.log("data from local of user",this.userLogged);
        console.log("dataafter getting from local storage of seller",this.sellerLogged); 
        if(this.sellerLogged && res.url.includes('/seller/')){
          if(this.sellerLogged){ 
            // let sellerData= JSON.parse(this.sellerLogged);
             this.sellerName=JSON.parse(this.sellerLogged)[0].name;
             console.log("seller name.navbar:",this.sellerName);
             this.menuType='seller';
              }
        }else 
        if(this.userLogged){
          console.log("loggeduser if ");
          let useridData=JSON.parse(this.userLogged)[0].id;
                this.userName=JSON.parse(this.userLogged)[0].name;
              console.log("username",this.userName);
              this.menuType='user';
              this.product.getCartItemUser(useridData)
        }else{
            this.menuType='default';
            // this.logout();
          }
      }
    })
    

    let cartArray =localStorage.getItem('product')
    if(cartArray){
      this.cartItemNumberShow = JSON.parse(cartArray).length;
      console.log("cartArray of local storage",this.cartItemNumberShow);
    }



    this.product.addToCart.subscribe((res)=>{
        this.cartItemNumberShow = res.length;
        console.log("cart item ",this.cartItemNumberShow);
      })
  }
  
inputData:any;
searchRelatedData:any
  searchsuggestion(data:any){
this.inputData=data.target.value;
this.product.getproductbyName(this.inputData).subscribe((res)=>{
  this.searchRelatedData =res;
  console.log(res);
})
  }

searchProduct(nameP:any){
console.log("product name",nameP);
this.router.navigate(['/search/',nameP])
}

hideproduct(){
  this.searchRelatedData=undefined;
}

directtoPage(id:number){
this.router.navigate(['viewproduct',id]);
}
sellerid:any;
sellerLocal:any;
// logout seller or user
  logout(){
  // this.sellerLocal=this.seller.getsellerregisterlocal();
  // this.sellerid = JSON.parse(this.sellerLocal).id;
  // console.log("logout section", this.sellerid);
  // this.seller.deletesellerapi(this.sellerid).subscribe((res)=>{
  //   console.log("logout done",res);
  // })
    localStorage.clear();
  this.router.navigate(['home']);
  this.product.addToCart.emit([])
  // window.location.reload();
  }

  



}
