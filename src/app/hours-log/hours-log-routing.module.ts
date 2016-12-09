import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { HoursLogComponent }    from './hours-log.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'hoursLog', component: HoursLogComponent }
  ])],
  exports: [RouterModule]
})
export class HoursLogRoutingModule {}
