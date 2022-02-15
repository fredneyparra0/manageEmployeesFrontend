import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-action',
  templateUrl: './btn-action.component.html',
  styleUrls: ['./btn-action.component.css']
})
export class BtnActionComponent implements OnInit {

  @Input() url: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
