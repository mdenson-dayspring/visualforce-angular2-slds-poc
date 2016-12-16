import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LOG_LOGGER_PROVIDERS } from 'angular2-logger/core';
import { Store, StoreModule } from '@ngrx/store';

import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { HoursLogModule } from './hours-log';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';

import { ShiftReportEffects } from './effects/shift-report';

import { EnvService } from './services/env.service';
import { VFService } from './services/vf.service';

import { reducer } from './reducers';

@NgModule({
  imports: [
    BrowserModule,
    HoursLogModule,
    AppRoutingModule,
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(ShiftReportEffects)
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    LOG_LOGGER_PROVIDERS,
    EnvService,
    VFService
  ]
})
export class AppModule { }
