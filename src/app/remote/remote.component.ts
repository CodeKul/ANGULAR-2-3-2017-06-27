import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remote',
  template: `
    <div class="row">
      <div class="col-md-8 lilHght bg-danger ">
        <h1>Remote</h1>
      </div>

      <div class="col-md-3 lilHght bg-info lilLft">
      </div>
    </div>

  <div class="row lilTp">
    <div class="col-md-3 lilHght bg-danger">
    </div>
    <div class="col-md-8 lilHght bg-info lilLft">
    </div>
  </div>

  <div class="row">
    <div class="col-md-11">
      <div class="pull-right">
          <input type="text"><input type="button" value="Okay" class="btn btn-primary">
      </div>
    </div>
  </div>
  `,
  styles : [`
    input{
      border : 1px solid red;
    }
    .lilHght {
        height: 100px;
    }
    
    .lilTp {
        margin-top : 10px;
    }
    
    .lilLft{
        margin-left : 10px;
    }
  `]
})
export class RemoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
