import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './views/create-employee/create-employee.component';
import { ShowEmployeesComponent } from './views/show-employees/show-employees.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ShowEmployeesComponent
      },
      {
        path: 'create',
        component: CreateEmployeeComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
