import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() public name?: string;
  @Output() public checkEvent: EventEmitter<boolean> = new EventEmitter();
  public isChecked: boolean = false;
  constructor() { }

  public onCheck() {
    this.isChecked = !this.isChecked;
    this.checkEvent.emit(this.isChecked);
  }

}
