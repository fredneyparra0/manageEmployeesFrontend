import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  constructor() { }

  nameEmployee: string = '';

  ngOnInit(): void {
    this.loadComponent
  }

  loadComponent(e:any) {
    this.nameEmployee = e;
  }

}
