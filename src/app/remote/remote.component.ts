import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remote',
  template: `
    <input type="text" value="Remote Component">
  `,
  styles : [`
    input{
      border : 1px solid red;
    }
  `]
})
export class RemoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
