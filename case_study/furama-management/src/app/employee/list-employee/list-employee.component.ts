import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../service/employee.service";
import {Employee} from "../model/employee";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[] = [];
  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.showList();
  }

  showList(){
    this.employeeService.getAllEmployee().subscribe(data=>{
      this.employees = data;
    })
  }
}
