import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service/service.service";
import {Service} from "../model/service";

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  services: Service[]
  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.showList()
  }

  showList(){
    this.serviceService.getAllService().subscribe(data => {
      this.services = data;
    })
  }
}
