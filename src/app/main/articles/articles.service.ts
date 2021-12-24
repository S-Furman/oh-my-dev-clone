import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import {Article} from './article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  constructor(private http: HttpClient) { }

  public fetchArticles() {
    return this.http.get<Article[]>('https://ohmydevtest-default-rtdb.firebaseio.com/posts.json').
      pipe(map(data => {
        const newData = [];
        for (const key in data) {
          newData.push({...data[key], key});
        }
        return newData;
      }));
  }

  public addArticle(article: Article) {
    return this.http.post('https://ohmydevtest-default-rtdb.firebaseio.com/posts.json', article);
  }
}
