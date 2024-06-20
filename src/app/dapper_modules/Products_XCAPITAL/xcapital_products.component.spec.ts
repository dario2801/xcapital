import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XCAPITAL_Products_Component } from './xcapital_products.component';

describe('XCAPITAL_Products_Component', () => {
  let component: XCAPITAL_Products_Component;
  let fixture: ComponentFixture<XCAPITAL_Products_Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XCAPITAL_Products_Component],
    });
    fixture = TestBed.createComponent(XCAPITAL_Products_Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
