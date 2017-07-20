import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
   <div class="row">
     <div class="col-md-12">
       <input type="text" [(ngModel)]="nm"/> {{nm}} 
     </div>
   </div>
  `,
  styles: []
})
export class TwoWayBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
