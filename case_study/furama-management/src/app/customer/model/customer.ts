import {CustomerType} from "./customer-type";

export interface Customer {
  id: number;
  code: string;
  name: string;
  gender: string;
  customerType: CustomerType;
  birthday: string;
  idCard: string;
  phone: string;
  email: string;
  address: string;
}

