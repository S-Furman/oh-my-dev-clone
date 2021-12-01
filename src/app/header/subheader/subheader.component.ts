import { Component } from '@angular/core';
import { Chip } from '../../components/chip/chip.interface';
import { SUBHEADER_MODEL } from './subheader.model';


@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent {
  public chips: Chip[]  = SUBHEADER_MODEL;
  constructor() { }
}
