import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-checked',
  templateUrl: './input-checked.component.html',
  styleUrls: ['./input-checked.component.css']
})
export class InputCheckedComponent implements OnInit {

  @Input() stateChecked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
