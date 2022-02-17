import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-table-employees',
  templateUrl: './table-employees.component.html',
  styleUrls: ['./table-employees.component.css']
})
export class TableEmployeesComponent implements OnInit {

  constructor( private employeeService: EmployeeService ) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployes()
  }

}
