import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.css']
})
export class IpComponent implements OnInit {

  nm: string;
  brd: string;
  clr: string;
  r: number;
  g: number;
  b: number;

  @Input()
  myType: string;

  constructor() {
    this.nm = 'codekul.com';
    this.brd = '1px solid';
    this.clr = `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  ngOnInit() {
  }

  randomBrd() {
    this.r = Math.round(Math.random() * 255);
    this.g = Math.round(Math.random() * 255);
    this.b = Math.round((Math.random() * 255));
    this.clr = `rgb(${this.r}, ${this.g}, ${this.b})`;
    console.log(`rgb(${this.r}, ${this.g}, ${this.b})`);
  }
}
