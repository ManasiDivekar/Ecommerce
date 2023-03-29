import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SellerserviceService } from 'src/app/sharedservices/sellerservice.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-sign-auth',
  templateUrl: './sign-auth.component.html',
  styleUrls: ['./sign-auth.component.css']
})
export class SignAuthComponent implements OnInit {
  hide = false;
  sellersignin= false;
register = new FormGroup({
  'name' : new FormControl('',[Validators.required]),
  'password' : new FormControl('',[Validators.required]),
  'email' : new FormControl('',[Validators.required]),
})

login= new FormGroup({
  'email': new FormControl('',[Validators.required]),
  'password': new FormControl('',[Validators.required]),
})

sellerRegisterData:any;
sellerRegisterEmail:any;
sellerRegisterPassword:any;
  constructor( private seller:SellerserviceService, private router:Router) { }
 addseller(data:FormGroup){
this.seller.postseller(data.value).subscribe((res)=>{
  console.log("register response",res);
  this.seller.setsellerregisterlocal(res);
  this.sellerRegisterData= this.seller.getsellerregisterlocal();
  if(this.sellerRegisterData){
    this.sellerRegisterEmail= JSON.parse(this.sellerRegisterData).email;
    console.log("seller email:",this.sellerRegisterEmail);
    this.sellerRegisterPassword=JSON.parse(this.sellerRegisterData).password
  }
 swal("saved","registered successfully","success");
  this.loginenter();
})
}
ngOnInit(): void {
  
}

 loginseller(data:FormGroup){
    if(this.sellerRegisterEmail===this.login.value.email && this.sellerRegisterPassword===this.login.value.password){ 
    this.seller.loginapi(data.value).subscribe((res)=>{
      console.log("seller login response",res);
      this.seller.setsellerlogin(res);
      swal("","login successful !","success");
    this.router.navigate(['seller/sellerproduct']);
    })
  }else{
    swal("","enter valid data","error")
  }
  }
 

  loginenter(){
    this.sellersignin = true;
  }


  registenter(){
    this.sellersignin = false;
  }








// loginseller(data:FormGroup){
// this.seller.getsellerregister(data.value).subscribe((res:any)=>{
//   console.log(res);
//   if( res.body && res.body.length===1){
//     swal("","login successful !","success");
//   this.router.navigate(['seller/sellerproduct'])
//   }else{
//     swal("","enter valid data","error")
//   }
// })
// }

  




}
