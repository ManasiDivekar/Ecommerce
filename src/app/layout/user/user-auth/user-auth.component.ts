import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { cart, product } from 'src/app/sharedservices/interfacedatatype';
import { LoginService } from 'src/app/sharedservices/login.service';
import { ProductService } from 'src/app/sharedservices/product.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
hide = false;
userSignup = false;
register = new FormGroup({
  'name' : new FormControl('',[Validators.required]),
  'password' : new FormControl('',[Validators.required]),
  'email' : new FormControl('',[Validators.required]),
})

login= new FormGroup({
  'email': new FormControl('',[Validators.required]),
  'password': new FormControl('',[Validators.required]),
})
constructor(private loginus:LoginService,private router:Router, private productser:ProductService ) { }
userRegisterData:any;
userRegisterEmail:any;
userRegisterPassword:any;
registeruser(data:FormGroup){
  this.loginus.postregisteruser(data.value).subscribe((res)=>{
    console.log("user register",res);
    // this.loginus.setuserresgister(res);
    // this.userRegisterData = this.loginus.getuserRegister();
    // if(this.userRegisterData){
    //  this.userRegisterEmail=JSON.parse(this.userRegisterData).email;
    //  this.userRegisterPassword =JSON.parse(this.userRegisterData).password;
    //  console.log("user eamil password",this.userRegisterEmail,this.userRegisterPassword);
    // }
    swal("saved","go to login first","success");
    this.loginup();
  })
}


loginuser(data:FormGroup){

  this.loginus.getregisteruser(data.value).subscribe((res:any)=>{
    console.log(res);
    this.loginus.setuserresgister(res);
    if(res && res.length===1){
      swal("","login successful !","success");
      this.router.navigate(['home']);
      this.localToActualCart();
    }else{
      swal("","enter valid data","error")
    }
  })
//   if(this.userRegisterEmail===this.login.value.email && this.userRegisterPassword === this.login.value.password){ 
// this.loginus.loginuser(data.value).subscribe((res)=>{
//   console.log("user login response",res);
//   swal("","login successful !","success");
//   this.router.navigate('');
// })
// }else{ 
// }
}

localToActualCart(){
let data =localStorage.getItem('product');
let user = localStorage.getItem('userregister')
  let userId = user && JSON.parse(user)[0].id;
  console.log("id check for cart ",userId);
if(data){
  let cartDataList:product[]= JSON.parse(data);
  cartDataList.forEach((product:product,index)=>{
    let cartData:cart={
      ...product,
      productId:product.id,
      userId:userId
    }
    delete cartData.id;
    setTimeout(()=>{
      this.productser.addToCartPro(cartData).subscribe((res)=>{
        console.log(res);
      })
    },500)
    if(cartDataList.length===index+1){
      localStorage.removeItem('product');
    }
  })
  }
  setTimeout(()=>{
    this.productser.getCartItemUser(userId)
    // .subscribe((res:any)=>{
    //   console.log("data after userid",res);
    //   if(res){
    //    this.productser.addToCart.emit(res)
    //   }
    // })
  },2000)
}

ngOnInit(): void {

}






loginup(){
  this.userSignup=true;
}

signupOn(){
  this.userSignup = false;
}
 

}
