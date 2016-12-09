import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LOG_LOGGER_PROVIDERS } from 'angular2-logger/core';

import { HoursLogComponent } from './hours-log.component';
import { HoursLogTableComponent } from './table/hours-log-table.component';
import { HoursLogTableRowComponent } from './table-row/hours-log-table-row.component';

import { HoursLogRoutingModule } from './hours-log-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    HoursLogRoutingModule
  ],
  declarations: [
    HoursLogComponent,
    HoursLogTableComponent,
    HoursLogTableRowComponent
  ],
  bootstrap: [HoursLogComponent],
  providers: [LOG_LOGGER_PROVIDERS]
})
export class HoursLogModule { }
