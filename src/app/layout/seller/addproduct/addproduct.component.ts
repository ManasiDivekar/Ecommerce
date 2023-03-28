import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/sharedservices/product.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
addProduct=new FormGroup({
  'name': new FormControl(''),
  'description' : new FormControl(''),
  'category':new FormControl(''),
  'color': new FormControl(''),
  'image' : new FormControl(''),
  'price' : new FormControl('')
})
  constructor(private product:ProductService, private router:Router) { }

  addproduct(data:FormGroup){
 this.product.postproduct(data.value).subscribe((res)=>{
  console.log(res);
  swal("ADDED!","product added successfully","success");
  this.router.navigate(['/seller/sellerproduct']);
 })
  }
  ngOnInit(): void {
  }

}
