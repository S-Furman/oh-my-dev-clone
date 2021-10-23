import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "./articles.service";
import {Article} from './article.interface';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [] ;
  constructor(private articleService: ArticlesService) { }

  ngOnInit():void {
     this.articleService.fetchArticles().subscribe(data => this.articles = data );
  }

  addArticle() {
    this.articleService.addArticle({title: 'some Title', content: 'Some content', img: 'https://imgproxy.ohmydev.pl/UudV5D60Zc-qzTVGcUT40p9uLAQG5GnGroAj0bC8ogI/pr:post_mini/plain/https://www.internet-czas-dzialac.pl/content/images/2021/10/blog-3.png', rating: 10, tags: ['git', 'github']})
      .subscribe(data => console.log(data));
  }

}
