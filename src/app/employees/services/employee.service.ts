import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EMPLOYEES_ROUTES } from 'src/app/core/contants/http-routes';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http: HttpClient ) { }

  getAllEmployes() {
    this.http.get(`${environment.apiUrl + EMPLOYEES_ROUTES.getAll }`)
      .subscribe(e => {
        console.log(e)
      })
  }

}
