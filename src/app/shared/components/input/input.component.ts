import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  viewProviders: [
		{ provide: ControlContainer, useExisting: FormGroupDirective }
	]
})
export class InputComponent implements OnInit {

  @Input() label: string = '';
  @Input() placeHolder: string = '';
  @Input() type: string = 'text';
  @Input() typeForm: string = '';
  @Input() controlName: any = ''; 

  isDisable: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
