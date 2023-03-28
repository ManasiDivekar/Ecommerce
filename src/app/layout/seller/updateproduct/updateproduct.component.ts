import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/sharedservices/product.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
updateProduct = new FormGroup({
  'id':new FormControl(''),
  'name':new FormControl(''),
  'description': new FormControl(''),
  'category': new FormControl(''),
  'color':new FormControl(''),
  'image':new FormControl(''),
  'price':new FormControl('')
})
  constructor(private product:ProductService, private activatedroute:ActivatedRoute, private router:Router) { }
productid:any;
  ngOnInit(): void {
    console.log(this.activatedroute.snapshot.params['id']);
    this.product.getbyidproductapi(this.activatedroute.snapshot.params['id']).subscribe((res)=>{
      this.productid=res
      console.log("product param",res);
      this.updateProduct.setValue(this.productid);
    })
  }

  updateproduct(){
    this.product.putproduct(this.updateProduct.value.id,this.updateProduct.value).subscribe((res)=>{
      console.log(res);
      swal("UPDATED","product got updated","success");
      this.router.navigate(['/seller/sellerproduct']);
    })
  }
}
