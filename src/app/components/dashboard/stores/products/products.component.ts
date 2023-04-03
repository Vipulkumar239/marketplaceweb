import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/api-responseModels';
import { CartService } from 'src/app/services/cart.service';
import { AppState } from 'src/app/store/state';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [];
  cart :Product[]=[];
  val:number=0
  // @ViewChild('cart', { static: false, read: ElementRef }) fab!: ElementRef;

  constructor(
    // private CartService: CartService,
    private router: Router,
    // private store: Store<AppState>
  ) {
    ///we will not get quantity key inside each object from api,
    // we'll add it by mapping from frontend and set initial value to 0
    // we'll maintain quantity on frontend for total price calculations.
    this.products = [
      { id: 0, name: 'Dolo 650 mg', price: 50 },
      { id: 1, name: 'Azithromycin', price: 80 },
      { id: 2, name: 'Volini', price: 75  },
      { id: 3, name: 'Vicks', price: 15 },
      { id: 4, name: 'Saridon', price: 20},
      { id: 5, name: 'Combiflam', price: 70},
    ];
  }
  checkout(){
    this.router.navigate(['/pages/cart'])
  }
  addOrIncreaseCartItem(product: Product) {
    // this.CartService.increaseProduct(product);
    // product.quantity+=1
  }

  removeOrReduceCartItem(product: Product) {
    // this.CartService.decreaseProduct(product);
    // product.quantity-=1
  }
  }

