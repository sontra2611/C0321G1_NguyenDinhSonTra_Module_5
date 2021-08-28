import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../service/customer.service";
import {Customer} from "../model/customer";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  page: number;
  search: any;

  customers: Customer[] = [];
  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
    this.showList()
  }

  showList() {
    this.customerService.getAllCustomer().subscribe(data=>{
      this.customers = data;
    })
  }

  openDialog(id: any) {
    
  }
}
