import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../service/employee.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Position} from "../model/position";
import {Division} from "../model/division";
import {EducationDegree} from "../model/education-degree";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  id: number;
  positions: Position[] = [];
  divisions: Division[] = [];
  educations: EducationDegree[] = [];

  editForm = new FormGroup({
    id: new FormControl(),
    code: new FormControl("", [Validators.required]),
    name: new FormControl("", [Validators.required]),
    position: new FormControl("", [Validators.required]),
    educationDegree: new FormControl("", [Validators.required]),
    division: new FormControl("", [Validators.required]),
    birthday: new FormControl("", [Validators.required]),
    idCard: new FormControl("", [Validators.required, Validators.pattern('[0-9]{9}|[0-9]{12}')]),
    salary: new FormControl("", [Validators.required, Validators.min(1)]),
    phone: new FormControl("", [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)[0-9]{7}$')]),
    email: new FormControl("", [Validators.required, Validators.email]),
    address: new FormControl("", [Validators.required])
  })

  constructor(private employeeService: EmployeeService,
              private router: Router,
              private activated: ActivatedRoute,
              private toast: ToastrService,
  ) {
    this.id = activated.snapshot.params.id;
  }

  ngOnInit(): void {
    this.setEditForm()
    this.getAllData()
  }

  getAllData() {
    this.employeeService.getAllDivision().subscribe(data => {
      this.divisions = data
    })

    this.employeeService.getAllPosition().subscribe(data => {
      this.positions = data
    })

    this.employeeService.getAllEducationDegree().subscribe(data => {
      this.educations = data
    })
  }

  setEditForm() {
    this.employeeService.findById(this.id).subscribe(data => {
      this.editForm.setValue(data)
    })
  }

  editEmployee() {
    const employee = this.editForm.value;
    this.employeeService.editEmployee(this.id, employee).subscribe(() => {
      this.router.navigateByUrl('/employee-list');
      this.showMessageSuccess()
    }, error => {
      this.showError()
    })
  }

  showMessageSuccess() {
    this.toast.success('Edit successfully', 'message')
  }

  showError() {
    this.toast.error('error', 'message')
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
