import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  'name': new FormControl('',[Validators.required]),
  'password': new FormControl('',[Validators.required]),
})


loginup(){
  this.userSignup=true;
}

signupOn(){
  this.userSignup = false;
}
  constructor() { }

  ngOnInit(): void {
  }

}
