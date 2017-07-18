import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hi',
  template: `
    <div class="row">
      <div class="col-md-12">
      <input type="button" class="btn btn-primary" value="Happy" (click)="imageEvent('boy.svg')"/>
      <input type="button" class="btn btn-primary" value="Yawn" (click)="imageEvent('sick.svg')"/>
      <input type="button" class="btn btn-primary" value="Smiling" (click)="imageEvent('panda.png')"/>
      </div>
    </div>
  `,
  styles: []
})
export class HiComponent implements OnInit {

  @Output()
  imgEv: EventEmitter<string>;

  constructor() {
    this.imgEv = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  imageEvent(imgNm: string) {
    this.imgEv.emit(imgNm);
  }
}
