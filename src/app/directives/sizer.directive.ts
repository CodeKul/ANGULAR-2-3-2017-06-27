import {
  Directive,
  ElementRef,
  Renderer2,
  HostBinding,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[sizer]'
})
export class SizerDirective {

  @Input('sizer')
  @HostBinding('style.width')
  size: string;

  @HostBinding('class.well')
  wll: boolean;

  @HostListener('click')
  onEnter() {
    this.size = '300px';
  }

  @HostListener('mouseleave')
  onLeave() {
    this.size = '100px';
  }

  constructor(
    // private elRef: ElementRef,
    // private rend: Renderer2
  ) {
    this.size = '300px';
    this.wll = true;
    // this.elRef.nativeElement.style.width = this.size;
    // this.rend.setStyle(this.elRef.nativeElement, 'width', this.size);
  }
}
