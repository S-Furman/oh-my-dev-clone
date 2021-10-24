import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-anchor-black',
  templateUrl: './anchor-black.component.html',
  styleUrls: ['./anchor-black.component.css']
})
export class AnchorBlackComponent implements OnInit {
  @Input() link!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
