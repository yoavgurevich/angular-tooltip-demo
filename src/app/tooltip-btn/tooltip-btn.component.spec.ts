import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipBtnComponent } from './tooltip-btn.component';

describe('TooltipBtnComponent', () => {
  let component: TooltipBtnComponent;
  let fixture: ComponentFixture<TooltipBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
