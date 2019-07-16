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

  constructor(
    private customerService: CustomerService
  ) { }

  getCustomersLavadero(): void {
    this.customerService.getCustomersLavadero()
    .subscribe(customers => this.customers = customers);
  }

  ngOnInit() {
    this.getCustomersLavadero();
  }

}
