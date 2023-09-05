import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

export const APIAsSource = true

platformBrowserDynamic().bootstrapModule(AppModule) // dependencies injector
  .catch(err => console.error(err));
