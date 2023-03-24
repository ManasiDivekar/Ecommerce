import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerproductComponent } from './sellerproduct/sellerproduct.component';
import { SignAuthComponent } from './sign-auth/sign-auth.component';

const routes: Routes = [
{ path: '', 
 children:[
  {
    path:'',component:SignAuthComponent
  },
  {
    path:'sellerproduct',component:SellerproductComponent
  }
 ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
