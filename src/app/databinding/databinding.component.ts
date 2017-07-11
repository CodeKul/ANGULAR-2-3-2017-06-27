import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  nm: string;

  constructor() {
    this.nm = 'codekul.com';
  }

  getNm() { return 'android'; }
}
