import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( ) { }

  getAllEmployes() {
    return [
      {
        name: "fredney",
        position: "Fundador y Ceo",
        age: 40,
        hiringDate: new Date()
      },
      {
        name: "federico",
        position: "Desarrollador",
        age: 22,
        hiringDate: new Date()
      }
    ]
  }

}
