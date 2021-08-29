import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contract} from "../model/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private CONTRACT_URL = 'http://localhost:3000/contract'
  constructor(private http: HttpClient) { }

  getAllContract(): Observable<Contract[]> {
    return this.http.get<Contract[]>(this.CONTRACT_URL).pipe();
  }

  createContract(contract: Contract): Observable<void> {
    return this.http.post<void>(this.CONTRACT_URL, contract);
  }
}
