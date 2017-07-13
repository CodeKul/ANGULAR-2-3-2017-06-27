import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RemoteComponent } from './remote/remote.component';
import { InnerComponent } from './inner/inner.component';
import { CellComponent } from './inner/cell.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ActualContentComponent } from './content-projection/actual-content.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { OpComponent } from './databinding/op.component';
import { IpComponent } from './databinding/ip.component';

@NgModule({
  declarations: [
    AppComponent,
    RemoteComponent,
    InnerComponent,
    CellComponent,
    ContentProjectionComponent,
    ActualContentComponent,
    DatabindingComponent,
    OpComponent,
    IpComponent
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
