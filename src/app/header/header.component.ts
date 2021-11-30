import { Component } from '@angular/core';
import { faSearch, faBars, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public faSearch: IconDefinition = faSearch;
  public faBars: IconDefinition = faBars;
  public isSearchVisible: boolean = false;
  public sideBarVisible: boolean = false;
  constructor() { }
  public expandSearch() {
    this.isSearchVisible = true;
  }
  public toggleSideMenu() {
    this.sideBarVisible = !this.sideBarVisible;
  }
  public hideModal() {
    this.sideBarVisible = false;
  }
}
