import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-op',
  template: `
    <div class="row">
      <div class="col-md-9">
        {{date}}
      </div>
      <div class="col-md-3" >
        <input type="button" class="btn btn-primary" (click)="onOkay()" value="Okay">
      </div>
    </div>
    <div class="row">
      <div class="col-md-9">
      </div>
      <div class="col-md-3" >
        <input type="text" (keyup)="date=nm.value" #nm>
      </div>
    </div>
  `,
  styles: [`
    .lil {
      height : 200px
    } 
  `]
})
export class OpComponent implements OnInit {

  date: string;

  constructor() {
    this.date = new Date().toString();
  }

  ngOnInit() {
  }

  onOkay() {
    this.date = new Date().toString();
  }
}
