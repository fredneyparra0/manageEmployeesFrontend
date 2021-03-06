import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeesRoutingModule } from './employees-routing.module';
import { ShowEmployeesComponent } from './views/show-employees/show-employees.component';
import { EditEmployeeComponent } from './views/edit-employee/edit-employee.component';
import { InputSearchComponent } from '../shared/components/input-search/input-search.component';
import { TableEmployeesComponent } from './components/table-employees/table-employees.component';
import { SharedModule } from '../shared/shared.module';
import { CreateEmployeeComponent } from './views/create-employee/create-employee.component';
import { BtnActionComponent } from '../shared/components/btn-action/btn-action.component';
import { InputComponent } from '../shared/components/input/input.component';
import { OptionSelectComponent } from '../shared/components/option-select/option-select.component';
import { RouterModule } from '@angular/router';
import { InputCheckedComponent } from '../shared/components/input-checked/input-checked.component';
import { FormComponent } from './components/form/form.component';
import { ShowEmployeeComponent } from './views/show-employee/show-employee.component';


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
    FormComponent,
    ShowEmployeeComponent,
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class EmployeesModule { }
