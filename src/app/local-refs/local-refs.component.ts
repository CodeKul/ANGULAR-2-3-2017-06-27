import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-refs',
  templateUrl: './local-refs.component.html',
  styleUrls: ['./local-refs.component.css']
})
export class LocalRefsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  printIt(dt: string) {
    console.log(dt);
  }
}
