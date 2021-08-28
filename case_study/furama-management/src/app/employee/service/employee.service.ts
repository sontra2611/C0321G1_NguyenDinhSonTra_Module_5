import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../model/employee";
import {Division} from "../model/division";
import {EducationDegree} from "../model/education-degree";
import {Customer} from "../../customer/model/customer";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:3000/employee');
  }

  getAllPosition(): Observable<Position[]> {
    return this.http.get<Position[]>('http://localhost:3000/position');
  }

  getAllDivision(): Observable<Division[]> {
    return this.http.get<Division[]>('http://localhost:3000/division');
  }

  getAllEducationDegree(): Observable<EducationDegree[]> {
    return this.http.get<EducationDegree[]>('http://localhost:3000/educationDegree');
  }

  public saveEmployee(employee): Observable<Employee> {
    return this.http.post<Employee>('http://localhost:3000/employee', employee)
  }
}
