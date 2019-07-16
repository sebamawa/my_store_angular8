import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from './Models/customer';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class CustomerService {
	//customers = [];

	constructor(
		private http: HttpClient
	) { }

	 getCustomersLavadero() {//: Observable<Customer[]> {
		 const url_customers = 'http://localhost:3000/customers';
		 return this.http.get<Customer[]>(url_customers)
			.pipe(
				catchError(this.handleError<Customer[]>())
			)
	 }

	 private handleError<T>(result?: T) {
		return (error: any): Observable<T> => {
			console.log('Error al conectar al service');
			return of(result as T);
		}	
	 }
}


// // return this.http.get('/assets/shipping.json');
