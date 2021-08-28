import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../service/customer.service";
import {Customer} from "../model/customer";
import {MatDialog} from "@angular/material/dialog";
import {DeleteCustomerComponent} from "../delete-customer/delete-customer.component";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  page: number;
  search: any;

  customers: Customer[] = [];
  constructor(private customerService : CustomerService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.showList()
  }

  showList() {
    this.customerService.getAllCustomer().subscribe(data=>{
      this.customers = data;
    })
  }

  openDialog(id: any) {
    this.customerService.findById(id).subscribe(data => {
      const dialogRef = this.dialog.open(DeleteCustomerComponent, {
        width: '500px',
        data: {customer: data},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(() => {
        this.ngOnInit();
      });
    });
  }

}
