import {EducationDegree} from "./education-degree";
import {Position} from "./position";
import {Division} from "./division";

export interface Employee {
  id: number;
  code: string;
  name: string;
  position: Position;
  educationDegree: EducationDegree;
  division: Division;
  birthday: string;
  idCard: string;
  salary: number;
  phone: string;
  email: string;
  address: string;
}
