import {Component, Input, OnInit} from '@angular/core';
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() placeholder?: string;
  @Input() type?: string = 'text';
  @Input() icon?: IconDefinition;
  constructor() { }

  ngOnInit(): void {
  }

}
