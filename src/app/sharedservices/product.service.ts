import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './baseurl';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpclient:HttpClient) { }

  getallproduct(){
    return this.httpclient.get(`${baseUrl}/products`);
  }
  getproductindemand(){
    return this.httpclient.get(`${baseUrl}/products?_limits=4`)
  }
getbyidproductapi(id:any){
  return this.httpclient.get(`${baseUrl}/products/${id}`)
}
  deleteproductapi(id:any){
 return this.httpclient.delete(`${baseUrl}/products/${id}`);
  }

  postproduct(body:any){
    return this.httpclient.post(`${baseUrl}/products`,body);
  }

  putproduct(id:any,body:any){
    return this.httpclient.put(`${baseUrl}/products/${id}`,body);
  }
}
