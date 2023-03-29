import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
import { ViewproductuserComponent } from './layout/pages/viewproductuser/viewproductuser.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
     path:'viewproduct/:id',component:ViewproductuserComponent
  },
  { path: 'seller', loadChildren: () => import('./layout/seller/seller.module').then(m => m.SellerModule) },
  { path: 'user', loadChildren: () => import('./layout/user/user.module').then(m => m.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
