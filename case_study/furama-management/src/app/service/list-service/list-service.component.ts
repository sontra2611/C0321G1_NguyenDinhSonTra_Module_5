import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service/service.service";
import {Service} from "../model/service";
import {DeleteCustomerComponent} from "../../customer/delete-customer/delete-customer.component";
import {MatDialog} from "@angular/material/dialog";
import {DeleteServiceComponent} from "../delete-service/delete-service.component";

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  services: Service[]
  page: number;

  constructor(private serviceService: ServiceService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.showList()
  }

  showList(){
    this.serviceService.getAllService().subscribe(data => {
      this.services = data;
    })
  }

  openDialog(id: any) {
    this.serviceService.findById(id).subscribe(data => {
      const dialogRef = this.dialog.open(DeleteServiceComponent, {
        width: '500px',
        data: {service: data},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(() => {
        this.ngOnInit();
      });
    });
  }
}
