import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appUnderline]'
})
export class UnderlineDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') public onMouseOver() {
    this.el.nativeElement.style.textDecoration = 'underline';
  }
  @HostListener('mouseleave') public onMouseLeave() {
    this.el.nativeElement.style.textDecoration = 'none';
  }

}
