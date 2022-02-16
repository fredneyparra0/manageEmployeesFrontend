import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../../services/employee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

type EmployeeType = 'administrativa' | 'tecnologia';
type TypeForm = 'create' | 'update' | 'detail';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formEmployee = new FormGroup({
    name: new FormControl('', [Validators.required]),
    dateOfBirthday: new FormControl('', [Validators.required]),
    countrie: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    hiringDate: new FormControl('', [Validators.required]),
    state: new FormControl(false, [Validators.required]),
    areaOfWork: new FormControl('administrativa', [Validators.required]),
    position: new FormControl('', [Validators.required]),
    comission: new FormControl('', [Validators.required])
  })

  stateChecked: boolean = true;
  typeEmployee: EmployeeType = 'administrativa';

  @Input() typeForm: TypeForm = 'create';

  positionAdministrative: string[] = ['Fundador y CEO', 'Recursos humanos'];
  positiontechnology: string[] = ['Programador', 'Diseñador'];
  positions: string[] = [];
  countries: string[] = [];

  constructor( private http: HttpClient, private serviceEmployee: EmployeeService ) { }

  ngOnInit(): void {
    this.loadCountries();
    this.changePosition();
  }

  onSubmit() {
    console.log(this.formEmployee.value);
  }

  changePosition() {
    this.typeEmployee === 'administrativa' 
    ? this.positions = [...this.positionAdministrative] 
    : this.positions = [...this.positiontechnology]  
  }

  changeTypeEmployee(e: any) {
    if(e.target.id === 'btnradio1') {
      this.typeEmployee = 'administrativa'
      this.formEmployee.value.areaOfWork = 'administrativa'
    } else {
      this.typeEmployee = 'tecnologia'
      this.formEmployee.value.areaOfWork = 'tecnologia'
    }
    this.changePosition();
  }

  loadCountries() {
    this.http.get('http://api.countrylayer.com/v2/region/americas?access_key=88c9818e8c07fb9247acaf27943fa742')
      .subscribe((countries: any) => {
        this.countries = countries.map((countrie:any) => countrie.name);
      }, (err: any) => {
          this.http.get('assets/data/countries.json')
            .subscribe((countries: any) => {
              this.countries = countries.map((countrie:any) => countrie.name);
            })
      })
  }

}
