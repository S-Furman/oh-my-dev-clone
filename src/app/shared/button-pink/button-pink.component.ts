import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-pink',
  templateUrl: './button-pink.component.html',
  styleUrls: ['./button-pink.component.css']
})
export class ButtonPinkComponent implements OnInit {
  @Input() type?: string = 'button';
  @Input() disabled?: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
