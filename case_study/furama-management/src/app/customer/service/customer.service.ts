import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../model/customer';
import {Observable} from 'rxjs';
import {CustomerType} from "../model/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public API_CUSTOMER = 'http://localhost:3000/customer'

  constructor(private http: HttpClient) {
  }

  public getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_CUSTOMER);
  }

  public getAllCustomerType(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>('http://localhost:3000/customerType');
  }

  public saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.API_CUSTOMER, customer)
  }

  public findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.API_CUSTOMER + "/" + id)
  }

  public editCustomer(customer: Customer, id: number): Observable<Customer> {
    return this.http.put<Customer>(this.API_CUSTOMER + "/" + id, customer)
  }

  public deleteCustomer( id: number): Observable<void> {
    return this.http.delete<void>(this.API_CUSTOMER + "/" + id)
  }

  public search(name: string, customerTypeName: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_CUSTOMER + "?name_like=" + name + "&customerType.name=" + customerTypeName);
  }
}
