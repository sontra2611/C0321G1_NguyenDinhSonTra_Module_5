import {ServiceType} from "./service-type";

export interface Service {
  id: number,
  name: string,
  code: string,
  area: number,
  numberOfFloors: number,
  maxPeople: number,
  cost: number,
  serviceType: ServiceType
  standardRoom: string,
  description: string
}
