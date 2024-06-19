import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XCAPITAL_Hero_Component } from './Hero_XCAPITAL/xcapital_hero.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [XCAPITAL_Hero_Component],
  imports: [
    CommonModule,
    SharedModule
    // FormsModule,
    // ReactiveFormsModule,
    // LazyLoadImageModule,
  ],
  exports: [XCAPITAL_Hero_Component],
})
export class XCAPITAL_HERO_Module {}
