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
import {ChipsComponent} from "./main/articles/article/chips/chips.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubheaderComponent,
    MainComponent,
    ArticlesComponent,
    ArticleComponent,
    ChipComponent,
    CookiesComponent,
    ChipsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
