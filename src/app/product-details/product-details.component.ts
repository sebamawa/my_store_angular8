import { Component, OnInit } from '@angular/core';

// The ActivateRoute is specific to each routed loaded by the Angular Router. It contains information
// about the route, its parameters, and aditional data associated with the route
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute, // inyeccion
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    }
    );
  }

}
