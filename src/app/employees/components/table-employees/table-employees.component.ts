import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-employees',
  templateUrl: './table-employees.component.html',
  styleUrls: ['./table-employees.component.css']
})
export class TableEmployeesComponent implements OnInit {

  fieldsTable: any[] = ['Nombre (Cargo)', 'Edad', 'Fecha de contratacion', 'Acciones'];

  constructor() { }

  ngOnInit(): void {
  }

}
