import { Component, OnInit } from '@angular/core';

type employeeType = 'administrativa' | 'tecnologia';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  stateChecked: boolean = true;
  typeEmployee: employeeType = 'administrativa';

  constructor() { }

  ngOnInit(): void {
  }

  changeTypeEmployee(e: any) {
    e.target.id === 'btnradio1' ? this.typeEmployee = 'administrativa' : this.typeEmployee = 'tecnologia'; 
  }

}
