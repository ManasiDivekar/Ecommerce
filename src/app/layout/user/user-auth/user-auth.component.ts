import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/sharedservices/login.service';
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
constructor(private loginus:LoginService, private router:Router ) { }
userRegisterData:any;
userRegisterEmail:any;
userRegisterPassword:any;
registeruser(data:FormGroup){
  this.loginus.postregisteruser(data.value).subscribe((res)=>{
    console.log("user register",res);
    this.loginus.setuserresgister(res);
    this.userRegisterData = this.loginus.getuserRegister();
    if(this.userRegisterData){
     this.userRegisterEmail=JSON.parse(this.userRegisterData).email;
     this.userRegisterPassword =JSON.parse(this.userRegisterData).password;
     console.log("user eamil password",this.userRegisterEmail,this.userRegisterPassword);
    }
    swal("saved","go to login first","success");
    this.loginup();
  })
}


loginuser(data:FormGroup){
  if(this.userRegisterEmail===this.login.value.email && this.userRegisterPassword === this.login.value.password){ 
this.loginus.loginuser(data.value).subscribe((res)=>{
  console.log("user login response",res);
  swal("","login successful !","success");
  // this.router.navigate('');
})
}else{
  swal("","enter valid data","error")
}
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
