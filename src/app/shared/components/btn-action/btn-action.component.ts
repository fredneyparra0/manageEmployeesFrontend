import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/employees/services/employee.service';
 

type type = 'see' | 'edit' | 'delete' | 'create';

@Component({
  selector: 'app-btn-action',
  templateUrl: './btn-action.component.html',
  styleUrls: ['./btn-action.component.css']
})

export class BtnActionComponent implements OnInit {
 
  @Input() type: type = 'see';
  @Input() url: string = '';
  @Input() route: string = '';
  @Input() paramRoute:  string = '';

  constructor( 
    private router: Router,
    private serviceEmployee: EmployeeService
  ) { }

  ngOnInit(): void {
  }

  onClikDelete() {
    this.serviceEmployee.deleteOneEmployee(parseFloat(this.paramRoute))
      .subscribe((e: any) => {
        console.log(e);
      })
    
    console.log(this.paramRoute)
  }

}
