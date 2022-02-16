import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {

  @Input() value: string = '';
  @Input() icon: string = '';
  @Input() type: string = 'button';
  @Input() isDisable: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
