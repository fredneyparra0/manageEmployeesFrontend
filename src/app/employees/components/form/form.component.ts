import { Component, Input, OnInit } from '@angular/core';

type employeeType = 'administrativa' | 'tecnologia';
type valueBtn = 'guardar' | 'actualizar';
type typeForm = 'create' | 'update' | 'see';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  stateChecked: boolean = true;
  typeEmployee: employeeType = 'administrativa';

  @Input() valueBtn: valueBtn = 'guardar';
  @Input() typeForm: typeForm = 'create';

  constructor() { }

  ngOnInit(): void {
  }
  changeTypeEmployee(e: any) {
    e.target.id === 'btnradio1' ? this.typeEmployee = 'administrativa' : this.typeEmployee = 'tecnologia'; 
  }

}
