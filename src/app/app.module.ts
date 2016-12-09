import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LOG_LOGGER_PROVIDERS } from 'angular2-logger/core';

import { AppComponent } from './app.component';
import { HoursLogComponent } from './hours-log/hours-log.component';
import { HoursLogTableComponent } from './hours-log/table/hours-log-table.component';
import { HoursLogTableRowComponent } from './hours-log/table-row/hours-log-table-row.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    HoursLogComponent,
    HoursLogTableComponent,
    HoursLogTableRowComponent
  ],
  bootstrap: [AppComponent],
  providers: [LOG_LOGGER_PROVIDERS]
})
export class AppModule { }
