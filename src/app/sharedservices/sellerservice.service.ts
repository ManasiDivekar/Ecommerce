import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './baseurl';

@Injectable({
  providedIn: 'root'
})
export class SellerserviceService {

  constructor(private httpclient:HttpClient) { }

  postseller(body:any){
    return this.httpclient.post(`${baseUrl}/seller`,body)
  }
}
