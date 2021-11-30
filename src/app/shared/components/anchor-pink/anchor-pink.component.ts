import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-anchor-pink',
  templateUrl: './anchor-pink.component.html',
  styleUrls: ['./anchor-pink.component.scss']
})
export class AnchorPinkComponent {
  @Input() link!: string;
  constructor() { }

}
