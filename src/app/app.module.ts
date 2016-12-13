import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LOG_LOGGER_PROVIDERS } from 'angular2-logger/core';

import { HoursLogModule } from './hours-log';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { EnvService } from './services/env.service';
import { VFService } from './services/vf.service';

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
  providers: [
    LOG_LOGGER_PROVIDERS,
    EnvService,
    VFService
  ]
})
export class AppModule { }
