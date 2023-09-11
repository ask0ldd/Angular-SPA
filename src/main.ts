import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

export const APIAsSource = false
export const serverBaseUrl = "http://127.0.0.1:5678/"

platformBrowserDynamic().bootstrapModule(AppModule) // dependencies injector
  .catch(err => console.error(err));
