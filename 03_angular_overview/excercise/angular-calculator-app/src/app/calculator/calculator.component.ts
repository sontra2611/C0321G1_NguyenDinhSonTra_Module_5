import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculate(firstOperator: string, operator: string, secondOperand: string): void {
    switch (operator) {
      case '+' :
        this.result = Number(firstOperator) + Number(secondOperand);
        break;
      case '-' :
        this.result = Number(firstOperator) - Number(secondOperand);
        break;
      case '*' :
        this.result = Number(firstOperator) * Number(secondOperand);
        break;
      case '/' :
        if (secondOperand === '0') {
          this.result = 'Số chia phải khác 0';
        } else {
          this.result = Number(firstOperator) / Number(secondOperand);
        }
        break;
    }
  }
}
