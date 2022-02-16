import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type typeOption = 'position' | 'countrie';

@Component({
  selector: 'app-option-select',
  templateUrl: './option-select.component.html',
  styleUrls: ['./option-select.component.css']
})
export class OptionSelectComponent implements OnInit {

  @Input() label: string = '';
  @Input() valueOptions: string[] = [];
  
  @Input() typeOption: string = '';

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
  }

}
