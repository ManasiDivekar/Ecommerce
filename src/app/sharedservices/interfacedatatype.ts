export interface signup{
    "name":string;
    "password":string;
    "email":string;
}

export default interface login{
    "name":string;
    "password":string;
}

export interface product{
    "name":string;
    "description":string;
    "category":string;
    "color":string;
    "price":number;
    "image":string;
}