import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../service/employee.service";
import {Employee} from "../model/employee";
import {MatDialog} from "@angular/material/dialog";
import {DeleteCustomerComponent} from "../../customer/delete-customer/delete-customer.component";
import {DeleteEmployeeComponent} from "../delete-employee/delete-employee.component";
import {Division} from "../model/division";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[] = [];
  page: number
  term = '';
  divisions: Division[];
  divisionName = ''

  constructor(private employeeService : EmployeeService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.showList();
    this.getAllDivision()
  }

  showList(){
    this.employeeService.getAllEmployee().subscribe(data=>{
      this.employees = data;
    })
  }

  getAllDivision(){
    this.employeeService.getAllDivision().subscribe(data => {
      this.divisions = data;
    })
  }


  openDialog(id: any) {
    this.employeeService.findById(id).subscribe(data => {
      const dialogRef = this.dialog.open(DeleteEmployeeComponent, {
        width: '500px',
        data: {employee: data},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(() => {
        this.ngOnInit();
      });
    });
  }

  searchEmployee() {
    console.log(this.term)
    console.log(this.divisionName)
    this.employeeService.searchEmployee(this.term, this.divisionName).subscribe(data => {
      this.employees = data;
      this.page = 1;
    })
  }

  sortByName() {
    this.employeeService.sortByName().subscribe(data => {
      this.employees = data;
      this.page = 1;
    })
  }
}
