import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() public placeholder?: string;
  @Input() public type: string = 'text';
  @Input() public icon?: IconDefinition;
  @Input() public alignIconRight: boolean = false;
  @Input() public name: string = '';
  @Input() public required: boolean = false;
  constructor() { }
}
