import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubheaderComponent } from './header/subheader/subheader.component';
import { MainComponent } from './main/main.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ArticlesComponent } from './main/articles/articles.component';
import { ArticleComponent } from './main/articles/article/article.component';
import { ChipComponent } from './components/chip/chip.component';
import { CookiesComponent } from './cookies/cookies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubheaderComponent,
    MainComponent,
    ArticlesComponent,
    ArticleComponent,
    ChipComponent,
    CookiesComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
