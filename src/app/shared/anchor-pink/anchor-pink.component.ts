import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-anchor-pink',
  templateUrl: './anchor-pink.component.html',
  styleUrls: ['./anchor-pink.component.css']
})
export class AnchorPinkComponent implements OnInit {
  @Input() link!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
