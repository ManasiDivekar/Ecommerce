import { Component, OnInit } from '@angular/core';
import { order } from 'src/app/sharedservices/interfacedatatype';
import { ProductService } from 'src/app/sharedservices/product.service';

@Component({
  selector: 'app-myorderpage',
  templateUrl: './myorderpage.component.html',
  styleUrls: ['./myorderpage.component.css']
})
export class MyorderpageComponent implements OnInit {

  constructor(private product:ProductService) { }
orderData:order[]|undefined
  ngOnInit(): void {
    this.getorderdata();
  }
cancelOrder(id:number|undefined){
  id && this.product.cancelOrder(id).subscribe((res)=>{
    console.log(res);
    if(res){
      this.getorderdata();
    }
  })
}

getorderdata(){
  this.product.orderList().subscribe((res)=>{
    console.log(res);
    this.orderData=res;
  })
}
}
