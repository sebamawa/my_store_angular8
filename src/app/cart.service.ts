import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product) {
    // console.log('Llamada a metodo CartService: addToCart()');
    this.items.push(product);
  }  

  getItems() {
    return this.items;
  }

  get getItemsQuantity() {
    // console.log('Llamada a metodo CartService: getItemQuantity()');
    return this.items.length;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}


