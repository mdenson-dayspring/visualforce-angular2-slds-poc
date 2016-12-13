/// <reference path='custom.d.ts' />
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule, EnvService, Parameters } from './app';

if (process.env.ENV === 'production') {
  enableProdMode();
}

window.startAngular = (parameters: Parameters) => {
  EnvService.inject(parameters);
  platformBrowserDynamic().bootstrapModule(AppModule);
};
