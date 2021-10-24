import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appPinkHover]'
})
export class PinkHoverDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = '#F03C9C';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = 'inherit';
  }

}
