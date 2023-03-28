import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { signup } from 'src/app/sharedservices/interfacedatatype';
import { LoginService } from 'src/app/sharedservices/login.service';
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
  'name': new FormControl('',[Validators.required]),
  'password': new FormControl('',[Validators.required]),
})

sellerRegisterData:any;
sellerRegisterName:any;
  constructor( private seller:SellerserviceService, private router:Router) { }
 addseller(){
this.seller.postseller(this.register.value).subscribe((res)=>{
  console.log("register response",res);
  this.seller.setsellerregisterlocal(res);
 swal("saved","go to login first","success");
})
}
ngOnInit(): void {

  if(localStorage.getItem('sellerregister')){ 
  this.sellerRegisterData= this.seller.getsellerregisterlocal();
  if(this.sellerRegisterData){
    this.sellerRegisterName= JSON.parse(this.sellerRegisterData).name;
    console.log("seller name:",this.sellerRegisterName);

  } 
} 
}

loginseller(data:FormGroup){
  this.seller.loginapi(data.value).subscribe((res)=>{
    console.log("ts response",res);
    this.seller.setsellerlogin(res);
    swal("","login successful !","success");
  this.router.navigate(['seller/sellerproduct']);
  })
  
}

  loginenter(){
    this.sellersignin = true;
  }




  registenter(){
    this.sellersignin = false;
  }




}
