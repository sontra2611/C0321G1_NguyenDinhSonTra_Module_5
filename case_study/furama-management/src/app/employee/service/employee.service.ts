import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../model/employee";
import {Division} from "../model/division";
import {EducationDegree} from "../model/education-degree";
import {Position} from "../model/position";
import {CustomerType} from "../../customer/model/customer-type";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public EMPLOYEE_URL = 'http://localhost:3000/employee'

  constructor(private http: HttpClient) {
  }

  getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.EMPLOYEE_URL);
  }

  public saveEmployee(employee): Observable<Employee> {
    return this.http.post<Employee>(this.EMPLOYEE_URL, employee)
  }

  findById(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.EMPLOYEE_URL + '/' + id);
  }

  editEmployee(id: number, employee: Employee): Observable<void> {
    return this.http.put<void>(this.EMPLOYEE_URL + '/' + id, employee);
  }


  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(this.EMPLOYEE_URL + '/' + id);
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

  searchEmployee(name: string, divisionName: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.EMPLOYEE_URL + "?name_like=" + name + "&division.name_like=" + divisionName)
  }

  sortByName(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.EMPLOYEE_URL + '?_sort=name')
  }
}
