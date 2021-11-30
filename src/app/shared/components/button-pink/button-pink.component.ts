import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-pink',
  templateUrl: './button-pink.component.html',
  styleUrls: ['./button-pink.component.scss']
})
export class ButtonPinkComponent {
  @Input() public type?: string = 'button';
  @Input() public disabled?: boolean;
  constructor() { }
}
