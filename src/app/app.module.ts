import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RemoteComponent } from './remote/remote.component';
import { InnerComponent } from './inner/inner.component';
import { CellComponent } from './inner/cell.component';

@NgModule({
  declarations: [
    AppComponent,
    RemoteComponent,
    InnerComponent,
    CellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
