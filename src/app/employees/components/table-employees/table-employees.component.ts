import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-table-employees',
  templateUrl: './table-employees.component.html',
  styleUrls: ['./table-employees.component.css']
})
export class TableEmployeesComponent implements OnInit {

  employees: any[] = [];

  constructor( private employeeService: EmployeeService ) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployes()
      .subscribe((e:any) => {
        this.employees = e.data;
      })
  }

  reloadEmployees(e: any) {
    if(e === 'reload'){
      this.employeeService.getAllEmployes()
      .subscribe((e:any) => {
        this.employees = e.data;
      })
    }
  }


}
