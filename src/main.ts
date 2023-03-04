import { withEnabledBlockingInitialNavigation } from '@angular/router';
import { provideFileRouter } from '@analogjs/router';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { AppComponent } from './app/app.component';

import { provideAppFeature } from './app/store/reducers/app.reducer';
import { provideEntriesFeature } from './Entries/store/reducers/entries.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideFileRouter(withEnabledBlockingInitialNavigation()),
    provideHttpClient(),
    provideStore(),
    provideStoreDevtools(),
    provideEffects(),
    provideAppFeature(),
    provideEntriesFeature(),

    // { provide: PreLoadDirective, useClass: PreLoadDirective },

    // { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: disableGlobalRipple },
  ],
}).catch((err) => console.error(err));

// import {createEnvironmentInjector, ENVIRONMENT_INITIALIZER} from '@angular/core';

// {provide: BACKEND_URL, useValue: 'https://photoapp.looknongmodules.com/api'},

//  importProvidersFrom(
//       LibraryModule.forRoot()
//     ),
