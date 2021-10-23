import { Component, OnInit } from '@angular/core';
import {faFire, faLeaf} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  faFire = faFire;
  faLeaf = faLeaf;
  constructor() { }

  ngOnInit(): void {
  }

}
