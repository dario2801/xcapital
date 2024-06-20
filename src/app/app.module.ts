import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Dapper_Module } from './dapper_modules/dapper.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Dapper_Module, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
