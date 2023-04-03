import { Injectable } from '@angular/core';
import { Category } from 'src/app/shared/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  getAll(): Category[] {
    return [
      {
        id: 1,
        name: "Pharmacy",
        imageUrl:'/assets/pharmacy.png'
        // D:\marketPlaceWeb\src\assets\download.jpg
        // src\assets\download.jpg
      },
      {
        id: 2,
        name: "Bakery",
        imageUrl:'/assets/bakery.jpg'
      },
      {
        id: 3,
        name: "Clothing",
        imageUrl:'/assets/clothing.jpg'
      },
      {
        id: 4,
        name: "Salon",
        imageUrl:'/assets/salon.jpg'
      },
      {
        id: 5,
        name: "Grocery",
        imageUrl:'/assets/grocery.png'
      },
      {
        id: 6,
        name: "Restuarant",
        imageUrl:'/assets/restaurant.png'
      },
      {
        id: 7,
        name: "Pharmacy",
        imageUrl:'/assets/pharmacy.png'
        // D:\marketPlaceWeb\src\assets\download.jpg
        // src\assets\download.jpg
      },
      {
        id: 8,
        name: "Bakery",
        imageUrl:'/assets/bakery.jpg'
      },
      
    ];
  }
}
