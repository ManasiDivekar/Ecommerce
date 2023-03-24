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
  'name': new FormControl('',[Validators.required]),
  'password': new FormControl('',[Validators.required]),
})
  constructor( private seller:SellerserviceService, private router:Router) { }
 addseller(data:FormGroup){
this.seller.postseller(data.value).subscribe((res)=>{
  console.log(res);
 swal("saved","data saved successfully","success");
})
 }

loginseller(){
  // this.seller.postseller(data.value).subscribe((res)=>{
  //   console.log(res);
  // swal("login successful !","success");
  // })
  swal("","login successful !","success");
  this.router.navigate(['seller/sellerproduct']);
}


 
  loginenter(){
    this.sellersignin = true;
  }

  registenter(){
    this.sellersignin = false;
  }
  ngOnInit(): void {
  }

}
