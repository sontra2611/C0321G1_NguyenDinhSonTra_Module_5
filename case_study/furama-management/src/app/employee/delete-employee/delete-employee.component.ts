import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EmployeeService} from "../service/employee.service";

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  public id: number;
  public name: string;

  constructor(public dialogRef: MatDialogRef<DeleteEmployeeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = this.data.employee.id;
    this.name = this.data.employee.name;
  }

  close(): void {
    this.dialogRef.close();
  }

  delete() {
    this.employeeService.deleteEmployee(this.id).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
