import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../model/customer';
import {Observable} from 'rxjs';
import {CustomerType} from "../model/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  public getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:3000/customer').pipe();
  }

  public getAllCustomerType(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>('http://localhost:3000/customerType').pipe();
  }

  public saveCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>('http://localhost:3000/customer', customer)
  }
}
