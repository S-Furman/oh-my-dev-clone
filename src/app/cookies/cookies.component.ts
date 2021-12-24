import { Component } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent {
  public visible: boolean = true;
  constructor() { }

  public closeModal() {
    this.visible = false;
  }

}
