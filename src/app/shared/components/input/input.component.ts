import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
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
