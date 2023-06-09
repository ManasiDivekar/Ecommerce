import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './layout/pages/navbar/navbar.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { FooterComponent } from './layout/pages/footer/footer.component';
import { ViewproductuserComponent } from './layout/pages/viewproductuser/viewproductuser.component';
import { SearchProductComponent } from './layout/pages/search-product/search-product.component';
import { CartComponent } from './layout/pages/cart/cart.component';
import { OrderComponent } from './layout/pages/order/order.component';
import { MyorderpageComponent } from './layout/pages/myorderpage/myorderpage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ViewproductuserComponent,
    SearchProductComponent,
    CartComponent,
    OrderComponent,
    MyorderpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
