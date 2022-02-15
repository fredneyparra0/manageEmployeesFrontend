import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
