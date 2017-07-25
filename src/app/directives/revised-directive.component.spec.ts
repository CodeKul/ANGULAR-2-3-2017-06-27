import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisedDirectiveComponent } from './revised-directive.component';

describe('RevisedDirectiveComponent', () => {
  let component: RevisedDirectiveComponent;
  let fixture: ComponentFixture<RevisedDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisedDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisedDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
