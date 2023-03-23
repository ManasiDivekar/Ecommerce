import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/sharedservices/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
allproduct :any;
  constructor(private product:ProductService) { }

  ngOnInit(): void {
     this.product.getallproduct().subscribe((res)=>{
      this.allproduct=res;
      console.log(res);
     })
  }

}
