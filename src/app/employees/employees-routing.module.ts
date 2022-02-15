import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowEmployeesComponent } from './views/show-employees/show-employees.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ShowEmployeesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
