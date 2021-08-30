import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../customer/service/customer.service";
import {EmployeeService} from "../../employee/service/employee.service";
import {ServiceService} from "../../service/service/service.service";
import {ContractService} from "../service/contract.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Customer} from "../../customer/model/customer";
import {Employee} from "../../employee/model/employee";
import {Service} from "../../service/model/service";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  public customers: Customer[] = [];
  public employees: Employee[] = [];
  public services: Service[] = [];

  createForm = new FormGroup({
    employee: new FormControl('', Validators.required),
    customer: new FormControl('', Validators.required),
    service: new FormControl('', Validators.required),
    dateGroup: new FormGroup({
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required)
    }, this.checkDate),
    deposit: new FormControl('', [Validators.required, Validators.min(1)]),
    totalMoney: new FormControl('', [Validators.required, Validators.min(1)])
  })

  constructor(public customerService: CustomerService,
              public employeeService: EmployeeService,
              public contractService: ContractService,
              public serviceService: ServiceService,
              public router: Router,
              private toastTr: ToastrService) {
  }

  ngOnInit(): void {
    this.getAllData()
  }

  getAllData() {
    this.employeeService.getAllEmployee().subscribe(data => {
      this.employees = data;
    });

    this.customerService.getAllCustomer().subscribe(data => {
      this.customers = data;
    });

    this.serviceService.getAllService().subscribe(data => {
      this.services = data;
    });
  }

  createContract() {
    this.contractService.createContract(this.createForm.value).subscribe(() => {
      this.router.navigateByUrl('/contract-list');
    });
  }

  checkDate(dateControl: AbstractControl) {
     const dateGroupValue = dateControl.value;
     let startDate = new Date(dateGroupValue.startDate);
     let endDate = new Date(dateGroupValue.endDate);

     return (endDate > startDate) ? null: {invalidDate : true};
  }
}
