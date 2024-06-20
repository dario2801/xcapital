import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XCAPITAL_Steps_Component } from './xcapital_steps.component';

describe('XCAPITAL_Steps_Component', () => {
  let component: XCAPITAL_Steps_Component;
  let fixture: ComponentFixture<XCAPITAL_Steps_Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XCAPITAL_Steps_Component],
    });
    fixture = TestBed.createComponent(XCAPITAL_Steps_Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
