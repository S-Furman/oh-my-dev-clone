import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit {
  visible = true;
  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.visible = false;
  }

}
