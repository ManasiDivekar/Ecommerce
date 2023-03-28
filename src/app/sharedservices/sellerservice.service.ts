import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './baseurl';
import baseUrl from './baseurl';

@Injectable({
  providedIn: 'root'
})
export class SellerserviceService {

  constructor(private httpclient:HttpClient) { }

  postseller(body:any){
    return this.httpclient.post(`${baseUrl}/seller`,body);
  }
  
  setsellerregisterlocal(data:any){
   return localStorage.setItem('sellerregister',JSON.stringify(data));
  }

  getsellerregisterlocal(){
    return localStorage.getItem('sellerregister');
  }
  setsellerlogin(data:any){
    localStorage.setItem('sellerdata',JSON.stringify(data));
  }
 getloginseller(){
 return localStorage.getItem('sellerdata');
}

  loginapi(body:any){
    return this.httpclient.post(`${baseurl}/login`,body)
  }
  
}
