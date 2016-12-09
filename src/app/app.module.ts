import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LOG_LOGGER_PROVIDERS } from 'angular2-logger/core';

import { AppComponent } from './app.component';

import { HoursLogModule } from './hours-log/hours-log.module';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    HoursLogModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  providers: [LOG_LOGGER_PROVIDERS]
})
export class AppModule { }
