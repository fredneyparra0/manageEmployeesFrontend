import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  constructor() { }

  nameEmployee: string = '';

  ngOnInit(): void {
    this.loadComponent
  }

  loadComponent(e:any) {
    this.nameEmployee = e;
  }

}
