import {
  Directive,
  HostBinding,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[magic]'
})
export class MagicColorDirective {

  @Input('magic')
  @HostBinding('style.backgroundColor')
  bakCol: string;

  @HostBinding('style.border')
  border:string;

  @HostListener('mouseenter')
  onAbc() {
    this.bakCol = this.magicColor();
    this.border = '1px solid black';
  }

  @HostListener('mouseleave')
  onXyz() {
    this.bakCol = this.magicColor();
    this.border = '1px solid white';
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
