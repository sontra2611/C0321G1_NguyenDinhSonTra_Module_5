import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CustomerService} from "../service/customer.service";

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  public id: number;
  public name: string;

  constructor( public dialogRef: MatDialogRef<DeleteCustomerComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any,
               public customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.id = this.data.customer.id;
    this.name = this.data.customer.name;
  }

  close(): void {
    this.dialogRef.close();
  }

  delete() {
    this.customerService.deleteCustomer(this.id).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
