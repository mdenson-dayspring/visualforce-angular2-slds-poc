import { Injectable } from '@angular/core';
import { Logger } from 'angular2-logger/core';

import { EnvService } from './env.service';

@Injectable()
export class VFService {
  constructor(private $env: EnvService, private $log: Logger) {
    this.$log.debug('VFService: Logged In User is \'' + this.$env.loggedInUser + '\'.');
  }
}
