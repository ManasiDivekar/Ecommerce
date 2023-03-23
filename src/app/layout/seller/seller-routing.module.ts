import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignAuthComponent } from './sign-auth/sign-auth.component';

const routes: Routes = [
{ path: '', 
 children:[
  {
    path:'',component:SignAuthComponent
  }
 ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
