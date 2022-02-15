import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { ShowEmployeesComponent } from './views/show-employees/show-employees.component';
import { EditEmployeeComponent } from './views/edit-employee/edit-employee.component';


@NgModule({
  declarations: [
    ShowEmployeesComponent,
    EditEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
