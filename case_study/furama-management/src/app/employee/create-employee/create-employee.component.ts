import { Component, OnInit } from '@angular/core';
import {Division} from "../model/division";
import {EducationDegree} from "../model/education-degree";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  positions: Position[] = [];
  divisions: Division[] = [];
  educations: EducationDegree[] = [];



  constructor() { }

  ngOnInit(): void {
  }


}
