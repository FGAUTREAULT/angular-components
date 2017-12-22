import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarActionComponent } from './snack-bar-action.component';

describe('SnackBarActionComponent', () => {
  let component: SnackBarActionComponent;
  let fixture: ComponentFixture<SnackBarActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackBarActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
