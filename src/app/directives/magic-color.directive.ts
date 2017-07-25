import {
  Directive,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[magic]'
})
export class MagicColorDirective {

  @HostBinding('style.backgroundColor')
  bakCol: string;

  @HostListener('mouseenter')
  onAbc() {
    this.bakCol = this.magicColor();
  }

  @HostListener('mouseleave')
  onXyz() {
    this.bakCol = this.magicColor();
  }

  magicColor(): string {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    console.log(`rgb(${red}, ${green}, ${blue})`);
    return `rgb(${red}, ${green}, ${blue})`;
  }


  constructor() { }

}
