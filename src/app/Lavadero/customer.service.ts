import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Customer } from "./Models/customer";

import { Observable, of } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";
import { MessageService } from '../message.service';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

// para post http (add customer)
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  //customers = [];
  private customersCollection: AngularFirestoreCollection<Customer>;
  customersFirebase: Observable<Customer[]>;

  constructor(
	private http: HttpClient,
  private messageService: MessageService,
  private readonly afs: AngularFirestore
	) {
    this.customersCollection = afs.collection<Customer>('customers');
    this.customersFirebase = this.customersCollection.snapshotChanges().pipe(map(
      actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return {id, ...data};
      })
    ));
  }

  getCustomersLavadero(): Observable<Customer[]> {
	const url_get_customers = "http://localhost:3000/customers";
	return this.http.get<Customer[]>(url_get_customers)
	  .pipe( // 'pipe' the observable from http.get()
		  // tap(_ => this.log('Fetched customers')), // ok

		  // catchError operator (funcion) que toma un Observable (o funcion handleError) por argumento que retorna un Observable
		  // catchError(()=>{ console.log ('ERROR!'); return of([])}));
		  catchError(this.handleError<Customer[]>('getCustomersLavadero', [])));
  }



  getCustomersLavaderoFireBase() {
    // console.log(this.customersFirebase);
    return this.customersFirebase;
  }

  /**
   *  Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of operation that failed
   * @param result  - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
	return (error: any): Observable<T> => {

	  console.error(`Error: ${error}`);
	  this.log(`${operation}() failed: ${error.message}`); // mensaje del error para el usuario

	  // Let the app keep running by returning an empty result.
	  // return of(result as T);

	  return Observable.throw(error); // retorno error para usar en el subscribe()
	};
  }

  /** POST: add a new hero to the server */
  addCustomerLavadero(customer: Customer): Observable<Customer> {

      // loopback
      const url_post_customer = "http://localhost:3000/customers";
      return this.http.post<Customer>(url_post_customer, customer, httpOptions).pipe(
          // tap((newCustomer: Customer) => this.log(`Added customer: ${newCustomer}`)),
          catchError(this.handleError<Customer>('addCustomerLavadero'))
      );
  }

  // firebase
  addCustomerLavaderoFireBase(customer: Customer) {
      return this.customersCollection.add(customer);
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
	    this.messageService.add(`CustomerService: ${message}`);
  }

}
// // return this.http.get('/assets/shipping.json');
