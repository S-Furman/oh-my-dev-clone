import { Component } from '@angular/core';
import { faFire, faLeaf, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public faFire: IconDefinition = faFire;
  public faLeaf: IconDefinition = faLeaf;
  constructor() { }
}
