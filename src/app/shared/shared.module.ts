import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';

// COMPONENTS

@NgModule({
  imports: [CommonModule],
  declarations: [NavbarComponent],
  providers: [],
  exports: [NavbarComponent],
})
export class SharedModule {}
