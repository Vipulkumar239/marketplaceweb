export interface CategoryResponseDataModel{
    cid: string | number,
    categoryName: string,
    status: string,
    image?:any
  }
  
  export interface StoresResponseDataModel{
    storeName: string,
    name: string,
    address: string,
    gstNumber: string | number,
    company: string,
    cid: string,
    sellerId: string,
    storeId: string | number,
    image?:any
  }
  
  export interface ProductsResponseDataModel{
    productName: string,
    description: string,
    pid: string | number
  }
  
  export interface Product {
    id: number;
    name: string;
    price: number;
    // quantity: number;
  }
  
  