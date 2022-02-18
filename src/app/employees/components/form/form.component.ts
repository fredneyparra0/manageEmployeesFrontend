import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../../services/employee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

type TypeForm = 'create' | 'update' | 'detail';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formEmployee = new FormGroup({
    name: new FormControl('', [Validators.required]),
    dateofBirthday: new FormControl('', [Validators.required]),
    countrie: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    hiringDate: new FormControl('', [Validators.required]),
    state: new FormControl(true, [Validators.required]),
    areaOfWork: new FormControl('administrativa', [Validators.required]),
    position: new FormControl('', [Validators.required]),
    comission: new FormControl(0)
  })

  @Output() nameEmployee: EventEmitter<any> = new EventEmitter(); 

  @Input() typeForm: TypeForm = 'create';

  positionAdministrative: string[] = ['Fundador y CEO', 'Recursos humanos'];
  positiontechnology: string[] = ['Programador', 'Diseñador'];
  positions: string[] = [];
  countries: string[] = [];

  constructor( 
    private http: HttpClient,
    private serviceEmployee: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadCountries();
    this.changePosition();
    this.loadDataDetail();
  }

  onSubmit() {
    this.serviceEmployee.createNewEmployee(this.formEmployee.value)
      .subscribe((e: any) => {
        this.router.navigate(['/'])
      })
  }

  changePositionDetail() {
    this.positions = this.formEmployee.value.areaOfWork; 
  }

  changePosition() {
    this.formEmployee.value.areaOfWork === 'administrativa' 
      ? this.positions = this.positionAdministrative 
      : this.positions = this.positiontechnology  
  }

  changeTypeEmployee(e: MouseEvent ) {
    if((e.target as HTMLInputElement).id === 'btnradio1') {
      this.formEmployee.value.areaOfWork = 'administrativa'
    } else {
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

  loadDataDetail() {
    if(this.typeForm === 'detail') {
      this.activatedRoute.params.subscribe((params: any) => {
        this.serviceEmployee.getEmployeeById(params.id)
          .subscribe((e:any) => {
            this.formEmployee.patchValue(e.data);
            this.nameEmployee.emit(this.formEmployee.value.name);
            this.changePositionDetail();
          })
      });
      // this.serviceEmployee.getEmployeeById(this.activatedRoute.params.)
    }
  }

}
