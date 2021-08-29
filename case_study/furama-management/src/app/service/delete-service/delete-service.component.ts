import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CustomerService} from "../../customer/service/customer.service";
import {ServiceService} from "../service/service.service";

@Component({
  selector: 'app-delete-service',
  templateUrl: './delete-service.component.html',
  styleUrls: ['./delete-service.component.css']
})
export class DeleteServiceComponent implements OnInit {
  public id: number;
  public name: string;

  constructor(public dialogRef: MatDialogRef<DeleteServiceComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public serviceService: ServiceService) { }

  ngOnInit(): void {
    this.id = this.data.service.id;
    this.name = this.data.service.name;
  }

  close(): void {
    this.dialogRef.close();
  }

  delete() {
    this.serviceService.deleteService(this.id).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
