import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../model/customer';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  public getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:3000/customer').pipe();
  }
}
