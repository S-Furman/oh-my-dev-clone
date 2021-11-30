import {Component, Input } from '@angular/core';
import {faCaretUp} from "@fortawesome/free-solid-svg-icons";
import {Article} from "../article.interface";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  faCaretUp = faCaretUp;
  @Input() article! : Article;
  constructor() { }
}
