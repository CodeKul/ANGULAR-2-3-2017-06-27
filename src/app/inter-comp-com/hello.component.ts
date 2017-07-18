import { by } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <div class="row">
      <div class="col-md-12">
      <img [src]="'../assets/'+imgNm" alt="../assets/boy.svg"/>
      </div>
    </div>
  `,
  styles: []
})
export class HelloComponent implements OnInit {

  @Input()
  imgNm: string;

  constructor() { }

  ngOnInit() {
  }
}
