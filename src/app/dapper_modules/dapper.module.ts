import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XCAPITAL_Hero_Component } from './Hero_XCAPITAL/xcapital_hero.component';
import { XCAPITAL_Products_Component } from './Products_XCAPITAL/xcapital_products.component';
import { XCAPITAL_Steps_Component } from './Steps_XCAPITAL/xcapital_steps.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    XCAPITAL_Hero_Component,
    XCAPITAL_Products_Component,
    XCAPITAL_Steps_Component,
  ],
  imports: [
    CommonModule,
    SharedModule,
    // FormsModule,
    // ReactiveFormsModule,
    // LazyLoadImageModule,
  ],
  exports: [
    XCAPITAL_Hero_Component,
    XCAPITAL_Products_Component,
    XCAPITAL_Steps_Component,
  ],
})
export class Dapper_Module {}
