import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-checked',
  templateUrl: './input-checked.component.html',
  styleUrls: ['./input-checked.component.css']
})
export class InputCheckedComponent implements OnInit {

  @Input() stateChecked: boolean = false;
  @Input() controlName: boolean = false;
  @Input() typeForm: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClickChange(e:any) {
    this.controlName = e.target.checked;
  }

}
