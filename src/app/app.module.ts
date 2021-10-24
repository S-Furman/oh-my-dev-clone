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
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './main/login/login.component';
import { ButtonPinkComponent } from './shared/button-pink/button-pink.component';
import { AnchorPinkComponent } from './shared/anchor-pink/anchor-pink.component';
import { InputComponent } from './shared/input/input.component';
import { ButtonBlackComponent } from './shared/button-black/button-black.component';
import { AnchorBlackComponent } from './shared/anchor-black/anchor-black.component';
import { UnderlineDirective } from './shared/underline.directive';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '**', component: MainComponent},
]

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
    ChipsComponent,
    LoginComponent,
    ButtonPinkComponent,
    AnchorPinkComponent,
    InputComponent,
    ButtonBlackComponent,
    AnchorBlackComponent,
    UnderlineDirective
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
