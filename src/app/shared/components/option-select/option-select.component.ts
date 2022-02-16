import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

type typeOption = 'position' | 'countrie';

@Component({
  selector: 'app-option-select',
  templateUrl: './option-select.component.html',
  styleUrls: ['./option-select.component.css'],
  viewProviders: [
		{ provide: ControlContainer, useExisting: FormGroupDirective }
	]
})
export class OptionSelectComponent implements OnInit {

  @Input() label: string = '';
  @Input() valueOptions: string[] = [];
  @Input() typeForm: string = '';
  @Input() typeOption: string = '';
  @Input() controlName: string = '';

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
  }

}
