import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actual-content',
  template: `
    <div class="col-md-12">
      <ng-content select="div"></ng-content>
      <ng-content select="h1"></ng-content> 
       <ng-content ></ng-content> 
      <input type="text">
      <input type="button" class="btn btn-danger" value="Okay">
    </div>
  `,
  styles: []
})
export class ActualContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
