import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../service/customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {CustomerType} from "../model/customer-type";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  id: number;
  customerTypes: CustomerType[] = [];
  editForm: FormGroup;

  constructor(private customerService: CustomerService,
              private router: Router,
              private activated: ActivatedRoute,
              private toast: ToastrService) {
    this.id = this.activated.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getInit();
    this.getAllCustomerType();
    this.setCustomer();
  }

  getInit() {
    this.editForm = new FormGroup({
      id: new FormControl(''),
      code: new FormControl(''),
      name: new FormControl(''),
      gender: new FormControl(''),
      customerType: new FormControl(''),
      birthday: new FormControl(''),
      idCard: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl('')
    })
  }

  getAllCustomerType() {
    this.customerService.getAllCustomerType().subscribe(data => {
      this.customerTypes = data;
    })
  }

  setCustomer(){
    this.customerService.findById(this.id).subscribe(data=>{
      this.editForm.setValue(data)
    })
  }

  editCustomer() {
    const customer = this.editForm.value
    this.customerService.editCustomer(customer, this.id).subscribe(()=>{
      this.router.navigateByUrl('/customer-list');
      this.showMessageSuccess();
    }, error => {this.showError()})
  }

  showMessageSuccess(){
    this.toast.success('Edit successfully', 'message')
  }

  showError(){
    this.toast.error('error', 'message')
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
