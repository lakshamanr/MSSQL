import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

export function getApiUrl() {
  return 'http://localhost:5000'; // Your first URL
}

export function getAnotherUrl() {
  return 'https://localhost:5001'; // Your second URL
}
const providers = [
  { provide: 'API_URL', useFactory: getApiUrl, deps: [] },
  { provide: 'ANOTHER_URL', useFactory: getAnotherUrl, deps: [] }
];

if (true) {
    enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
    .catch(err => console.log(err));
