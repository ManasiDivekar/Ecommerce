import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import baseUrl from './baseurl';
import { cart, order, product } from './interfacedatatype';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
addToCart = new EventEmitter<product[] | []>();
  constructor(private httpclient:HttpClient, private login:LoginService) { }

  getallproduct(){
    return this.httpclient.get(`${baseUrl}/products`);
  }
  getproductindemand(){
    return this.httpclient.get(`${baseUrl}/products?_limits=4`)
  }
getbyidproductapi(id:any){
  return this.httpclient.get(`${baseUrl}/products/${id}`)
}

getproductbyName(value:any){
  return this.httpclient.get(`${baseUrl}/products?q=${value}`)
}
  deleteproductapi(id:any){
 return this.httpclient.delete(`${baseUrl}/products/${id}`);
  }

  postproduct(body:product){
    return this.httpclient.post(`${baseUrl}/products`,body);
  }

  putproduct(id:any,body:any){
    return this.httpclient.put(`${baseUrl}/products/${id}`,body);
  }


  productToLocal(data:product[]){
    let cartData=[];
    let productOfLocal = localStorage.getItem('product')
    if(!productOfLocal){
      localStorage.setItem('product',JSON.stringify([data]))
      this.addToCart.emit(data)
    }else{
      cartData=JSON.parse(productOfLocal)
      cartData.push(data);
      localStorage.setItem('product',JSON.stringify(cartData))
      this.addToCart.emit(cartData)
    }
  }


  removeFromLocal(id:number){
    let productOfLocal = localStorage.getItem('product')
    if(productOfLocal){
      let item:product[]=JSON.parse(productOfLocal)
       item= item.filter((item:product)=>id!== item.id)
       localStorage.setItem('product',JSON.stringify(item))
      //  console.log(item);
      this.addToCart.emit(item)
    }
  }


addToCartPro(cartData:cart){
  return this.httpclient.post(`${baseUrl}/cart`,cartData);
}

getCartItemUser(id:number){
return this.httpclient.get<product[]>(`${baseUrl}/cart?userId=${id}`
,{observe:'response'}).subscribe((result:any)=>{
  console.log("user cart item by userid",result);
  if(result && result.body){
    this.addToCart.emit(result.body);
  }
})
}

removeProductCartDb(id:any){
return this.httpclient.delete(`${baseUrl}/cart/${id}`)
}

getCartDataPage(){
  let user = this.login.getuserRegister();
 let userId = user && JSON.parse(user)[0].id;
  return this.httpclient.get<cart[]>(`${baseUrl}/cart?userId=${userId}`);
}

orderpost(data:order){
return this.httpclient.post(`${baseUrl}/orders`,data)
}


orderList(){
  let user = this.login.getuserRegister();
 let userId = user && JSON.parse(user)[0].id;
 return this.httpclient.get<order[]>(`${baseUrl}/orders?userId=${userId}`)
}

deleteCartItems(id:number){
  return this.httpclient.delete(`${baseUrl}/cart/${id}`).subscribe((res)=>{
    console.log(res);
    this.addToCart.emit([]);
  })
}

cancelOrder(orderId:number){
return this.httpclient.delete(`${baseUrl}/orders/${orderId}`)
}





}
