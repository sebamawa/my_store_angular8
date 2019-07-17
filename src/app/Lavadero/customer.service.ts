import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Customer } from "./Models/customer";

import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { MessageService } from '../message.service';

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  //customers = [];

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) {}

  getCustomersLavadero(): Observable<Customer[]> {
    const url_customers = "http://localhost:3000/customers";
    return this.http.get<Customer[]>(url_customers)
      .pipe(
          // tap(_ => this.log('Fetched customers')), // ok
          catchError(this.handleError<Customer[]>('getCustomersLavadero', []))); // 'pipe' the observable from http.get()
  }

  /**
   *  Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of operation that failed
   * @param result  - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      this.log(`${operation} failed: ${error.message}`); // mensaje del error para el usuario

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CustomerService: ${message}`);
  }

}
// // return this.http.get('/assets/shipping.json');
