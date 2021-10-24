import {Component, Input, OnInit} from '@angular/core';
import {faCaretUp} from "@fortawesome/free-solid-svg-icons";
import {Article} from "../article.interface";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  faCaretUp = faCaretUp;
  @Input() article! : Article;
  constructor() { }

  ngOnInit(): void {
    console.log(this.article)
  }

}
