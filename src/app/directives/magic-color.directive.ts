import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[magic]'
})
export class MagicColorDirective implements OnInit {

  @Input()
  myStyle: any;

  @Input('magic')
  @HostBinding('style.backgroundColor')
  bakCol: string;

  @HostBinding('style.border')
  border: string;

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

  constructor() {
    this.border = '5px solid black';
  }
  ngOnInit() {
    this.bakCol = this.myStyle.col;
    this.border = this.myStyle.bord;
  }
}
