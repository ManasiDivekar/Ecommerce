import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/sharedservices/interfacedatatype';
import { ProductService } from 'src/app/sharedservices/product.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  constructor(private product:ProductService, private router:Router, private activatedroute:ActivatedRoute) { }
productName:any;
  allRelatedProduct:any;
  ngOnInit(): void {
    this.activatedroute.params.subscribe((res:any)=>{
      this.productName=res.name;
      console.log(res.name);
      // this.productName && this.product.getproductbyName(this.productName).subscribe((res)=>{
       this.product.getproductbyName(this.productName).subscribe((res:any)=>{
        if(res.length>0){
          this.allRelatedProduct =res;
        }else{
          this.allRelatedProduct =0;
        }
        console.log(res);
      })
      
    })
  }

}
