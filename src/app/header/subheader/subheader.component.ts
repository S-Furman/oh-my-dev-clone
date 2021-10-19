import { Component, OnInit } from '@angular/core';
import {faHeart} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.css']
})
export class SubheaderComponent implements OnInit {
  faHeart = faHeart
  constructor() { }

  ngOnInit(): void {
  }

}
