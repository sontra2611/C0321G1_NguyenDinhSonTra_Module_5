import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Service} from "../model/service";
import {Division} from "../../employee/model/division";
import {ServiceType} from "../model/service-type";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public SERVICE_URL = 'http://localhost:3000/service'
  constructor(private http: HttpClient) { }

  getAllService(): Observable<Service[]> {
    return this.http.get<Service[]>(this.SERVICE_URL);
  }

  getAllServiceType(): Observable<ServiceType[]> {
    return this.http.get<ServiceType[]>('http://localhost:3000/serviceType')
  }

  createService(service: Service): Observable<void> {
    return this.http.post<void>(this.SERVICE_URL, service);
  }

  findById(id: number): Observable<Service> {
    return this.http.get<Service>(this.SERVICE_URL + '/' + id);
  }

  editService(id: number, service: Service): Observable<void> {
    return this.http.put<void>(this.SERVICE_URL + '/' + id, service);
  }

  deleteService(id: number): Observable<void> {
    return this.http.delete<void>(this.SERVICE_URL + '/' + id);
  }
}
