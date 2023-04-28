export interface signup{
    "name":string;
    "password":string;
    "email":string;
}

export default interface signin{
    "email":string;
    "password":string;
}

export interface product{
    "id":number;
    "name":string;
    "description":string;
    "category":string;
    "color":string;
    "price":number;
    "image":string;
    "quantity":undefined | number;
    "productId":undefined | number;
}

export interface cart{
    "id":number |undefined;
    "name":string;
    "description":string;
    "category":string;
    "color":string;
    "price":number;
    "image":string;
    "quantity":undefined | number;
    "userId":number;
    "productId":number;  
}

export interface priceTotal{
    price:number;
    discount:number;
    tax:number;
    delivery:number;
    total:number;
}

export interface order{
    email:string,
    address:string,
    contact:string,
    totalPrice:number,
    userId:number,
    id:number|undefined
}