import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //encapsulation : ViewEncapsulation.Native
})
export class AppComponent {
  title = 'app works! CodeKul';

  justChange() {
    this.title = "" + new Date().getMilliseconds();
  }
}
