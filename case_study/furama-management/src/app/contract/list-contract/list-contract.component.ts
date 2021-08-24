import { Component, OnInit } from '@angular/core';
import {Contract} from "../model/contract";
import {ContractService} from "../service/contract.service";

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  contracts: Contract[] = [];
  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.showList()
  }

  showList(){
    this.contractService.getAllContract().subscribe(data => {
      this.contracts = data;
    })
  }
}
