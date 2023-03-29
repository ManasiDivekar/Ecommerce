import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerauthGuard } from 'src/app/sharedservices/authguard/sellerauth.guard';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SellerproductComponent } from './sellerproduct/sellerproduct.component';
import { SignAuthComponent } from './sign-auth/sign-auth.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [
{ path: '', 
 children:[
  {
    path:'',component:SignAuthComponent
  },
  {
    path:'sellerproduct',component:SellerproductComponent, canActivateChild:[SellerauthGuard]
  },
  {
    path:'addproduct',component:AddproductComponent
  },
  {
    path:'updateproduct/:id',component:UpdateproductComponent
  }
 ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
