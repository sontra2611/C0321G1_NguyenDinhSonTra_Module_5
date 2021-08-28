import {Component, OnInit} from '@angular/core';
import {CustomerType} from "../model/customer-type";
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../service/customer.service";
import {Router} from "@angular/router";
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerTypes: CustomerType[] = [];
  createForm: FormGroup;

  constructor(private customerService: CustomerService,
              private router: Router,
              private toast: ToastrService) {

    this.createForm = new FormGroup({
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

  ngOnInit(): void {
    this.getAllCustomerType();
  }

  getAllCustomerType() {
    this.customerService.getAllCustomerType().subscribe(data => {
      this.customerTypes = data;
    })
  }

  createCustomer() {
    const customer = this.createForm.value;
    this.customerService.saveCustomer(customer).subscribe(() => {
      this.router.navigateByUrl('/customer-list');
      this.showMessageSuccess();

    }, error => {this.showError()})
  }

  showMessageSuccess(){
    this.toast.success('Create successfully', 'message')
  }

  showError(){
    this.toast.error('error', 'message')
  }
}
