import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  positionAdministrative: string[] = ['Fundador y CEO', 'Recursos humanos'];
  positiontechnology: string[] = ['Programador', 'Diseñador'];
  positions: string[] = [];
  countries: string[] = [];

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    this.loadCountries();
    this.changePosition();
  }

  changePosition() {
    if(this.typeEmployee === 'administrativa') {
      this.positions = [...this.positionAdministrative]
    } else {
      this.positions = [...this.positiontechnology]
    }
  }

  changeTypeEmployee(e: any) {
    e.target.id === 'btnradio1' ? this.typeEmployee = 'administrativa' : this.typeEmployee = 'tecnologia'; 
    this.changePosition();
  }

  loadCountries() {
    this.http.get('http://api.countrylayer.com/v2/region/americas?access_key=88c9818e8c07fb9247acaf27943fa742')
      .subscribe((countries: any) => {
        this.countries = countries.map((countrie:any) => countrie.name);
      })
  }

}
