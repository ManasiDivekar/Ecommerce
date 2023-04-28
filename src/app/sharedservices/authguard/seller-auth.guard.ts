import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SellerserviceService } from '../sellerservice.service';

@Injectable({
  providedIn: 'root'
})
export class SellerAuthGuard implements CanActivate {
  constructor(private seller:SellerserviceService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.seller.isSellerLoggedIn ;
  }
  
}
