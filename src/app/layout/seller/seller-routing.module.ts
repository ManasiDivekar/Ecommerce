import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SellerproductComponent } from './sellerproduct/sellerproduct.component';
import { SignAuthComponent } from './sign-auth/sign-auth.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { SellerAuthGuard } from 'src/app/sharedservices/authguard/seller-auth.guard';

const routes: Routes = [
{ path: '', 
 children:[
  {
    path:'',component:SignAuthComponent
  },
  {
    path:'sellerproduct',component:SellerproductComponent,canActivate:[SellerAuthGuard]
  },
  {
    path:'addproduct',component:AddproductComponent,canActivate:[SellerAuthGuard]
  },
  {
    path:'updateproduct/:id',component:UpdateproductComponent,canActivate:[SellerAuthGuard]
  }
 ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
