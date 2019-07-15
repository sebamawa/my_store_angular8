import { Component, OnInit } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor() { }

  share() {
    window.alert('The product has been shared!');
  }

  // evento disparado por el hijo: ProductAlertsComponent
  onNotify() {
    window.alert('You will notified when the product goes on sale');
  }

  ngOnInit() {
  }

}
