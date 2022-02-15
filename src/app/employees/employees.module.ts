import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { ShowEmployeesComponent } from './views/show-employees/show-employees.component';
import { EditEmployeeComponent } from './views/edit-employee/edit-employee.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { TableEmployeesComponent } from './components/table-employees/table-employees.component';
import { SharedModule } from '../shared/shared.module';
import { CreateEmployeeComponent } from './views/create-employee/create-employee.component';
import { BtnActionComponent } from './components/btn-action/btn-action.component';
import { InputComponent } from './components/input/input.component';
import { OptionSelectComponent } from './components/option-select/option-select.component';
import { RouterModule } from '@angular/router';
import { InputCheckedComponent } from './components/input-checked/input-checked.component';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    ShowEmployeesComponent,
    EditEmployeeComponent,
    InputSearchComponent,
    TableEmployeesComponent,
    CreateEmployeeComponent,
    BtnActionComponent,
    InputComponent,
    OptionSelectComponent,
    InputCheckedComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class EmployeesModule { }
