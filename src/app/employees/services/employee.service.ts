import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EMPLOYEES_ROUTES } from 'src/app/core/contants/http-routes';
import { IEmployee } from 'src/app/core/interfaces/EmployeeInterface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http: HttpClient ) { }

  getAllEmployes() {
    return this.http.get(`${environment.apiUrl + EMPLOYEES_ROUTES.getAll }`);
  }

  deleteOneEmployee(id: number) {
    return this.http.delete(`${environment.apiUrl + EMPLOYEES_ROUTES.delete }/${id}`);
  }

  createNewEmployee(data: IEmployee){
    return this.http.post(`${environment.apiUrl + EMPLOYEES_ROUTES.create }`, {
      data
    })
  }

  getEmployeeById(id: number) {
    return this.http.get(`${environment.apiUrl + EMPLOYEES_ROUTES.getById }/${id}`)
  }

}
