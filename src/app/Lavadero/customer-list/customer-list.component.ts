import { Component, OnInit } from '@angular/core';
import { Customer } from '../Models/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];
  loading: boolean; // muestra puntos de carga en la view mientras se espera el response
  error: boolean;	

  constructor(
	private customerService: CustomerService
  ) {
	  this.loading = true;
	  this.error = true;
   }

  getCustomersLavadero(): void {
	// this.loading = false;		
	this.customerService.getCustomersLavadero()
	.subscribe(
		customers => {
		// console.log('NO HAY ERROR');
		this.loading = false;
		this.error = false;
		this.customers = customers;
	 },
		err => {
			// console.log(`Error en CustomerListComponent: ${err}`);
			this.loading = false;
			this.error = true;
	 });    
  }

  ngOnInit() {
	this.getCustomersLavadero();
  }

}
