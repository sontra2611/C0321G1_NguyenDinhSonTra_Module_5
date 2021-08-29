import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ServiceService} from "../service/service.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {ServiceType} from "../model/service-type";

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {
  id: number;
  serviceTypes: ServiceType[] = [];

  editForm = new FormGroup({
    id: new FormControl(''),
    code: new FormControl('', [Validators.required, Validators.pattern('^(DV)-[0-9]{4}$')]),
    name: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required, Validators.min(1)]),
    numberOfFloors: new FormControl('', [Validators.required, Validators.min(1)]),
    maxPeople: new FormControl('', [Validators.required, Validators.min(1)]),
    cost: new FormControl('', [Validators.required, Validators.min(1)]),
    serviceType: new FormControl('', [Validators.required]),
    standardRoom: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  })

  constructor(private serviceService: ServiceService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private toastTr: ToastrService) {
      this.id = activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.setValueEditForm()
    this.getAllServiceType()
  }

  getAllServiceType() {
    this.serviceService.getAllServiceType().subscribe(data => {
      this.serviceTypes = data;
    })
  }

  setValueEditForm() {
    this.serviceService.findById(this.id).subscribe(data => {
      this.editForm.setValue(data);
    })
  }

  editService() {
    const service = this.editForm.value;
    this.serviceService.editService(this.id, service).subscribe(() => {
      this.router.navigateByUrl('/service-list');
      this.showMessageSuccess();
    }, error =>{
      this.showErrorS();
    })
  }

  showMessageSuccess() {
    this.toastTr.success("Edit Successfully", "message")
  }

  showErrorS() {
    this.toastTr.success("Error", "message")
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
