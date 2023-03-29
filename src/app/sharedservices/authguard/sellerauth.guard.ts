import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerauthGuard implements CanActivateChild {
  // flag=false;
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 
  //  if(localStorage.getItem('sellerdata')!=null){
  //   this.flag=true;
  //  }else{
  //  this. flag=false;
  //  }
    return false;
  }
  
}
