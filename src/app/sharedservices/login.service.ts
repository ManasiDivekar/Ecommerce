import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './baseurl';
import signin, { signup } from './interfacedatatype';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient:HttpClient) { }
  postregisteruser(body:signup){
return this.httpclient.post(`${baseUrl}/users`,body);
  }
 
  getregisteruser(data:signin){
 return this.httpclient.get(`${baseUrl}/users?email=${data.email}&password=${data.password}`);
  }
  setuserresgister(data:any){
    localStorage.setItem('userregister',JSON.stringify(data));
  }

  getuserRegister(){
    return localStorage.getItem('userregister');
  }












 
//   loginuser(body:signin){
//   return this.httpclient.post(`${baseUrl}/userlogin`,body)
//   }

//   setloginuser(data:any){
//   localStorage.setItem('userlogin',data);
//   }

//  getloginuser(){
//   return localStorage.getItem('userlogin');
//  }


}
