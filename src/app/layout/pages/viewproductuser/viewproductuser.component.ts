import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/sharedservices/product.service';

@Component({
  selector: 'app-viewproductuser',
  templateUrl: './viewproductuser.component.html',
  styleUrls: ['./viewproductuser.component.css']
})
export class ViewproductuserComponent implements OnInit {
paramid:any;
productdet:any;
  constructor(private  product:ProductService , private activetedroute:ActivatedRoute) { }

  ngOnInit(): void {
 this.activetedroute.params.subscribe((res)=>{
  this.paramid =res;
  console.log(this.paramid.id);
  this.product.getbyidproductapi(this.paramid.id).subscribe((res)=>{
    console.log(res);
    this.productdet=res;
  })
 })
  }

}
