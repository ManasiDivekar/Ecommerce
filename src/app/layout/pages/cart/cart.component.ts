import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cart, priceTotal } from 'src/app/sharedservices/interfacedatatype';
import { ProductService } from 'src/app/sharedservices/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private product:ProductService, private router:Router) { }
cartDispalyData:cart[]|undefined;
priceTotal:priceTotal={
  price:0,
  discount:0,
  tax:0,
  delivery:0,
  total:0
}
  ngOnInit(): void {
    this.loadDetails();
  }



  removeCartItem(id:number|undefined){
   id && this.cartDispalyData && this.product.removeProductCartDb(id).subscribe((res)=>{
      console.log(res);
      this.loadDetails();
    })
  }

loadDetails(){
  this.product.getCartDataPage().subscribe((res)=>{
    this.cartDispalyData=res;
      console.log("Cart page display data",res);
      let price=0;
      res.forEach((item)=>{
        if(item.quantity){
          price = price + (+item.price* +item.quantity);
        // console.log(price);
        }
      })
      this.priceTotal.price=price;
      this.priceTotal.discount=price/10;
      this.priceTotal.tax=price/10;
      this.priceTotal.delivery=100;
      this.priceTotal.total= price+(price/10)+100-(price/10);
      if(!this.cartDispalyData.length){
        this.router.navigate(['/home'])
       }
    })
}

}
