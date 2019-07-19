import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

import { FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	items; // items del carrito
	checkoutForm; // form model

	constructor(
		private cartService: CartService,
		private formBuilder: FormBuilder
	)
	{
		this.items = this.cartService.getItems();

		// form controls to form model checkout
		this.checkoutForm = this.formBuilder.group({
			name: '',
			address: ''
		});
	}

	// in a real-world app, this method submit the data to an external server
	onSubmit(customerData) {

		// Process checkout data here

		console.warn('Your order has been submitted', customerData);

		this.items = this.cartService.clearCart();
		this.checkoutForm.reset();
	}

	ngOnInit() {
	}

}
