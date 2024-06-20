import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XCAPITAL_Hero_Component } from './xcapital_hero.component';

describe('XCAPITAL_Hero_Component', () => {
  let component: XCAPITAL_Hero_Component;
  let fixture: ComponentFixture<XCAPITAL_Hero_Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XCAPITAL_Hero_Component],
    });
    fixture = TestBed.createComponent(XCAPITAL_Hero_Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
