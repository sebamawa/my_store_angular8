import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from './Models/customer';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  //customers = [];

  constructor(
    private http: HttpClient
  ) { }

   getCustomersLavadero(): Observable<Customer[]> {
     const url_customers = 'http://localhost:3000/customers';
     return this.http.get<Customer[]>(url_customers);
   }
}


// // return this.http.get('/assets/shipping.json');
