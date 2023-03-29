import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerserviceService } from 'src/app/sharedservices/sellerservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

sellerName:any;
sellerLogged:any
  constructor(private seller:SellerserviceService, private router:Router) { }
menuType =false;



  ngOnInit(): void {   
    this.router.events.subscribe((res:any)=>{
      console.log(res);
      if(res.url){
        this.sellerLogged = this.seller.getsellerregisterlocal();
        console.log("dataafter getting from local storage",this.sellerLogged); 
        if(this.sellerLogged && res.url.includes('/seller/')){
          if(this.sellerLogged){ 
            // let sellerData= JSON.parse(this.sellerLogged);
             this.sellerName=JSON.parse(this.sellerLogged).name
             console.log("seller name.navbar:",this.sellerName);
             this.menuType=true;
          }
          }
          else{
            this.menuType=false;
            // this.logout();
          }
      }
    })

  }

  logout(){
    localStorage.clear();
  this.router.navigate(['home']);
  }
}
