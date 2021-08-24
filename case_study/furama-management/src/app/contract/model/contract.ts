import {Employee} from "../../employee/model/employee";
import {Customer} from "../../customer/model/customer";
import {Service} from "../../service/model/service";

export interface Contract {
  id: number;
  employee: Employee;
  customer: Customer;
  service: Service;
  startDate: string;
  endDate: string;
  deposit: number;
  totalMoney: number;
}
