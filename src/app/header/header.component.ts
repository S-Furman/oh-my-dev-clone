import { Component, OnDestroy, OnInit } from '@angular/core';
import { faSearch, faBars, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AuthService } from '../main/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy{
  public isAuth: boolean = false;
  public faSearch: IconDefinition = faSearch;
  public faBars: IconDefinition = faBars;
  public isSearchVisible: boolean = false;
  public sideBarVisible: boolean = false;
  private user!: Subscription;
  constructor(private authService: AuthService) { }
  public expandSearch() {
    this.isSearchVisible = true;
  }
  public toggleSideMenu() {
    this.sideBarVisible = !this.sideBarVisible;
  }
  public hideModal() {
    this.sideBarVisible = false;
  }

  public ngOnInit() {
    this.user = this.authService.user.subscribe(user => {
      this.isAuth = !!user;
    });
  }
  public ngOnDestroy() {
    this.user.unsubscribe();
  }
}
