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
import { InterCompComComponent } from './inter-comp-com/inter-comp-com.component';
import { HiComponent } from './inter-comp-com/hi.component';
import { HelloComponent } from './inter-comp-com/hello.component';
import { TwoWayBindingComponent } from './inter-comp-com/two-way-binding.component';
import { LocalRefsComponent } from './local-refs/local-refs.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DirectivesComponent } from './directives/directives.component';
import { SizerDirective } from './directives/sizer.directive';
import { RevisedDirectiveComponent } from './directives/revised-directive.component';
import { MagicColorDirective } from './directives/magic-color.directive';

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
    IpComponent,
    InterCompComComponent,
    HiComponent,
    HelloComponent,
    TwoWayBindingComponent,
    LocalRefsComponent,
    LifecycleComponent,
    DirectivesComponent,
    SizerDirective,
    RevisedDirectiveComponent,
    MagicColorDirective
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
