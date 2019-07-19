import { Component, OnInit } from '@angular/core';
import { Customer } from '../Models/customer';
import { CustomerService } from '../customer.service';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];
  customersFireBase: Customer[];
  loading: boolean; // muestra puntos de carga en la view mientras se espera el response
  error: boolean;
  customerFormModel;

  constructor(
	private customerService: CustomerService,
	private formBuilder: FormBuilder
  ) {
	  this.loading = true;
	  this.error = true;

	  // form controls to form model customer
	  this.customerFormModel = this.formBuilder.group({
		  name: '',
		  telephone: '',
		  address: ''
	  });
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

  getCustomersLavaderoFireBase(): void {
        this.customerService.getCustomersLavaderoFireBase()
        .subscribe(
            customersFireBase => {
                this.customersFireBase = customersFireBase;
                console.log(this.customersFireBase);
            }
        );
  }

  addCustomerLavadero(customerData): void {

      // agrega customer a mongo db
      // console.log(customerData);
      this.customerService.addCustomerLavadero(customerData)
          .subscribe(customer => {
              this.customers.push(customer);
              // console.log(`Cliente ${customer} agregado a la bd.`);
      });

      // agrega customer a firebase
      this.addCustomerLavaderoFireBase(customerData);

      this.customerFormModel.reset();
  }

  private addCustomerLavaderoFireBase(customer: Customer): void {
      this.customerService.addCustomerLavaderoFireBase(customer);
      // console.log('Add customer to firebase');
  }


  ngOnInit() {
      this.getCustomersLavadero();
      this.getCustomersLavaderoFireBase();
  }

}
