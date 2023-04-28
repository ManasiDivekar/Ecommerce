import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cart, product } from 'src/app/sharedservices/interfacedatatype';
import { LoginService } from 'src/app/sharedservices/login.service';
import { ProductService } from 'src/app/sharedservices/product.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-viewproductuser',
  templateUrl: './viewproductuser.component.html',
  styleUrls: ['./viewproductuser.component.css']
})
export class ViewproductuserComponent implements OnInit {
  removeCart=false;
paramid:any;
productdet:any;
cartDataforRemove:product | undefined;
QuantityofProduct:number=1;
  constructor(private  product:ProductService ,private login :LoginService, private activetedroute:ActivatedRoute) { }

  ngOnInit(): void {
 this.activetedroute.params.subscribe((res:any)=>{
  this.paramid =res.id;
  console.log(this.paramid);
  this.product.getbyidproductapi(this.paramid).subscribe((res)=>{
    console.log(res);
    this.productdet=res;


    let localCartData = localStorage.getItem('product');
    console.log(localCartData);
    if(this.paramid && localCartData){
     let productItem = JSON.parse(localCartData);
     productItem = productItem.filter((productItem:product)=>this.paramid==productItem.id)
     console.log(productItem);
       if(productItem.length){
       this.removeCart=true;
       }else{
         this.removeCart=false;
       }
    }

    let user = this.login.getuserRegister();
    if(user){
      let userId = user && JSON.parse(user)[0].id;
      this.product.getCartItemUser(userId);
      this.product.addToCart.subscribe((res)=>{
     let item =  res.filter((item:product)=>
      this.paramid?.toString()===item.productId?.toString())
     if(item.length){
      this.cartDataforRemove = item[0];
      this.removeCart=true;
     }
      })
    }
    

  })
 })

  }


  productQauntity(val:string){
if( this.QuantityofProduct<10 && val==='plus'){
this.QuantityofProduct+=1;
}else if(this.QuantityofProduct>1 && val==='min'){
  this.QuantityofProduct-=1;
}
}

addToCart(){
if(this.productdet){
  this.productdet.quantity = this.QuantityofProduct;
   console.log(this.productdet);
 if(!this.login.getuserRegister()){
   this.product.productToLocal(this.productdet);
   this.removeCart=true;
 }else{
  let user = this.login.getuserRegister();
 //  console.log("user",user);
  let userId = user && JSON.parse(user)[0].id;
 //  console.log("userid ",userId);
 let cartData:cart={
   ...this.productdet,
   userId,
   productId:this.productdet.id
 }
 delete cartData.id;
 console.log(cartData);
 this.product.addToCartPro(cartData).subscribe((res)=>{
   console.log(res);
   swal("successfully!","Product added to the cart.","success")
 this.product.getCartItemUser(userId)
 this.removeCart=true;
 })
 
 }
}
}


removecart(id:number){
  if(!this.login.getuserRegister()){
this.product.removeFromLocal(id);
}else{
  let user = this.login.getuserRegister();
 let userId = user && JSON.parse(user)[0].id;
console.log("cart data to remove",this.cartDataforRemove);
this.cartDataforRemove && this.product.removeProductCartDb(this.cartDataforRemove.id).subscribe((res)=>{
  console.log(res);
if(res){
  this.product.getCartItemUser(userId);
}
})
}
this.removeCart=false;
}


}
