import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SellerserviceService } from 'src/app/sharedservices/sellerservice.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-sign-auth',
  templateUrl: './sign-auth.component.html',
  styleUrls: ['./sign-auth.component.css']
})
export class SignAuthComponent implements OnInit {
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
  constructor( private seller:SellerserviceService) { }
 addseller(data:FormGroup){
this.seller.postseller(data.value).subscribe((res)=>{
  console.log(res);
 swal("saved","data saved successfully","success");
})
 }

// loginseller(data:FormGroup){
//   this.seller.postseller(data.value).subscribe((res)=>{
//     console.log(res);
//   swal("login successful !","success");
//   })
// }

 
  loginenter(){
    this.sellersignin = true;
  }

  registenter(){
    this.sellersignin = false;
  }
  ngOnInit(): void {
  }

}
