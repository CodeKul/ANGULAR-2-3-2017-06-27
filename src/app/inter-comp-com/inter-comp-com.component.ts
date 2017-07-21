import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inter-comp-com',
  templateUrl: './inter-comp-com.component.html',
  styleUrls: ['./inter-comp-com.component.css']
})
export class InterCompComComponent implements OnInit {
  imgVal: string = 'hell0';
  imgVal2 : string = 'hi';

  constructor() { }

  ngOnInit() {
  }
}
