import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-black',
  templateUrl: './button-black.component.html',
  styleUrls: ['./button-black.component.scss']
})
export class ButtonBlackComponent {
  @Input() public type?: string = 'button';
  constructor() { }
}
