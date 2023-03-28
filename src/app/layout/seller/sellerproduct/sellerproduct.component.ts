import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/sharedservices/product.service';
import  swal from 'sweetalert';

@Component({
  selector: 'app-sellerproduct',
  templateUrl: './sellerproduct.component.html',
  styleUrls: ['./sellerproduct.component.css']
})
export class SellerproductComponent implements OnInit {

  constructor(private product:ProductService) { }
allProduct:any;
  ngOnInit(): void {
    this.product.getallproduct().subscribe((res)=>{
     this.allProduct=res;
     console.log(res);
    })
  }


  deleteproduct(id:any){
    this.product.deleteproductapi(id).subscribe((res)=>{
      console.log(res);
      swal("deleted!","product got deleted","success");
      window.location.reload();
    })
  }

}
