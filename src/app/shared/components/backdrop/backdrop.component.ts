import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss']
})
export class BackdropComponent {
  @Output() public closeModal: EventEmitter<void> = new EventEmitter();
  constructor() { }

  public close() {
    this.closeModal.emit();
  }


}
