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
    this.id = this.data.name.id;
  }

}
