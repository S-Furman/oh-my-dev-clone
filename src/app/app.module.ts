import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubheaderComponent } from './header/subheader/subheader.component';
import { MainComponent } from './main/main.component';
import { ArticlesComponent } from './main/articles/articles.component';
import { ArticleComponent } from './main/articles/article/article.component';
import { ChipComponent } from './components/chip/chip.component';
import { CookiesComponent } from './cookies/cookies.component';
import {ChipsComponent} from './main/articles/article/chips/chips.component';

import { LoginComponent } from './main/login/login.component';
import { ButtonPinkComponent } from './shared/components/button-pink/button-pink.component';
import { AnchorPinkComponent } from './shared/components/anchor-pink/anchor-pink.component';
import { InputComponent } from './shared/components/input/input.component';
import { ButtonBlackComponent } from './shared/components/button-black/button-black.component';
import { AnchorBlackComponent } from './shared/components/anchor-black/anchor-black.component';
import { UnderlineDirective } from './shared/directives/underline.directive';
import { PinkHoverDirective } from './shared/directives/pink-hover.directive';
import { RegisterComponent } from './main/register/register.component';
import { CheckboxComponent } from './shared/components/checkbox/checkbox.component';
import { SidebarComponent } from './header/sidebar/sidebar.component';
import { BackdropComponent } from './shared/components/backdrop/backdrop.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: MainComponent},
];

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
    UnderlineDirective,
    PinkHoverDirective,
    RegisterComponent,
    CheckboxComponent,
    SidebarComponent,
    SidebarComponent,
    BackdropComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
