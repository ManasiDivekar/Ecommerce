import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cart, order } from 'src/app/sharedservices/interfacedatatype';
import { LoginService } from 'src/app/sharedservices/login.service';
import { ProductService } from 'src/app/sharedservices/product.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
cartData:cart[]|undefined;
priceTotal:number|undefined
  constructor(private product:ProductService, private login:LoginService,private router:Router) { }
  ngOnInit(): void {
    this.product.getCartDataPage().subscribe((res)=>{
        let price=0;
        this.cartData=res;
        res.forEach((item)=>{
          if(item.quantity){
            price = price + (+item.price* +item.quantity);
          // console.log(price);
          }
        })
        this.priceTotal= price+(price/10)+100-(price/10);
        console.log(this.priceTotal);
        
      })
  }




  saveAddress(data:{email:string,address:string,contact:string}){
    let user = this.login.getuserRegister();
    let userId = user && JSON.parse(user)[0].id;

    if(this.priceTotal){
      let orderData:order={
        ...data,
        totalPrice:this.priceTotal,
        userId,
        id:undefined
      }

      this.cartData?.forEach((item)=>{
        setTimeout(() => {
          item.id && this.product.deleteCartItems(item.id);
        }, 500);
      })

      this.product.orderpost(orderData).subscribe((res)=>{
        console.log(res);
        if(res){
          setTimeout(()=>{
            swal("success","your order is confirmed!","success");
          this.router.navigate(['/myorder/'])
          },4000)
        }
      })
    }
  }



}
