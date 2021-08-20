import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color: string;
  constructor() { }

  ngOnInit(): void {
  }

  setColor(value: string) {
    this.color = value;
  }
}
