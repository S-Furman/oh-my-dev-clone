import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    'openClose'
  ]
})
export class SidebarComponent {
  @Output() public closeModal: EventEmitter<void> = new EventEmitter();
  constructor() {}
  public hideModal() {
    this.closeModal.emit();
  }
}
