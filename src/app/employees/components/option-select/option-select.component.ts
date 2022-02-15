import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-option-select',
  templateUrl: './option-select.component.html',
  styleUrls: ['./option-select.component.css']
})
export class OptionSelectComponent implements OnInit {

  @Input() label: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
