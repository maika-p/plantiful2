import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideFileRouter } from '@analogjs/router';

import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app/app.component';

import { provideEntriesFeature } from './app/store/entries-state';
import { provideAppFeature } from './app/store/app-state';

bootstrapApplication(AppComponent, {
  providers: [
    provideFileRouter(),
    provideHttpClient(),
    provideStore(),
    provideStoreDevtools(),
    provideEffects(),
    provideEntriesFeature(),
    provideAppFeature(),
  ],
});
