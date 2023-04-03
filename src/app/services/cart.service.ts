import { Injectable } from '@angular/core';
import { Product } from '../models/api-responseModels';
import { Store } from '@ngrx/store';
import { TITLE } from '../core/constant';
import { setData } from '../store/action';
import { AppState } from '../store/state';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];

  totalPrice: number = 0;
  currentLocality: string = 'Sec 168, Noida';
  constructor(
    private store: Store<AppState>,
    
  ) {}

  getCart() {
    return this.cart;
  }

  increaseProduct(product: any) {
    this.cart.push(product);

    this.totalPrice += product.price;
    this.toSendObject();
  }

  decreaseProduct(product: any) {
    let findIndex = this.cart.findIndex((i) => i.id === product.id);
    if (findIndex > -1) {
      this.cart.splice(findIndex, 1);
      this.totalPrice -= product.price;

      this.toSendObject();
    }
  }

  removeAll() {
    this.cart = [];

    const data: AppState = {
      counter: 0,
      title: TITLE.Dashboard,
      totalPrice: 0,
    };
    this.store.dispatch(setData({ data }));
  }
  toSendObject() {
    const data: AppState = {
      counter: this.cart.length,
      title: TITLE.Dashboard,
      totalPrice: this.totalPrice,
    };
    this.store.dispatch(setData({ data }));
  }
  
}
