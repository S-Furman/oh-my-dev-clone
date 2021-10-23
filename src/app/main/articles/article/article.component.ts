import { Component, OnInit } from '@angular/core';
import {faCaretUp} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  number = 0;
  tags = ['git', 'github', 'programowanie'];
  faCaretUp = faCaretUp;
  constructor() { }

  ngOnInit(): void {
  }

}
