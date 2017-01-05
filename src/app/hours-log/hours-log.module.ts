import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LOG_LOGGER_PROVIDERS } from 'angular2-logger/core';

import { HoursLogComponent } from './hours-log.component';
import { HoursLogTableComponent } from './table/hours-log-table.component';
import { HoursLogTableRowComponent } from './table-row/hours-log-table-row.component';
import { HoursLogFormComponent } from './table-row/hours-log-form.component';

import { HoursLogRoutingModule } from './hours-log-routing.module';
import { FormatHourPipe } from './format-hour.pipe';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HoursLogRoutingModule
  ],
  declarations: [
    HoursLogComponent,
    HoursLogTableComponent,
    HoursLogTableRowComponent,
    HoursLogFormComponent,
    FormatHourPipe
  ],
  bootstrap: [HoursLogComponent],
  providers: [LOG_LOGGER_PROVIDERS]
})
export class HoursLogModule { }
