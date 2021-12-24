import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-anchor-black',
  templateUrl: './anchor-black.component.html',
  styleUrls: ['./anchor-black.component.scss']
})
export class AnchorBlackComponent {
  @Input() public link!: string;
  constructor() { }
}
