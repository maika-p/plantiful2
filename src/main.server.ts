import { PreLoadDirective } from './app/directives/preload.directive';
import { provideFileRouter } from '@analogjs/router';
import { provideHttpClient } from '@angular/common/http';
import { enableProdMode, inject } from '@angular/core';
import {
  renderApplication,
  ɵSERVER_CONTEXT as SERVER_CONTEXT,
} from '@angular/platform-server';
import { provideEffects } from '@ngrx/effects';
import { provideStore, Store } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import 'zone.js/node';
import { AppComponent } from './app/app.component';
import {
  provideAppFeature,
  AppActions,
} from './app/store/reducers/app.reducer';
import { provideEntriesFeature } from './Entries/store/reducers/entries.reducer';
import { withEnabledBlockingInitialNavigation } from '@angular/router';

if (import.meta.env.PROD) {
  enableProdMode();
}

export default async function render(url: string, document: string) {
  const html = await renderApplication(AppComponent, {
    appId: 'plantiful2',
    document,
    url,
    providers: [
      provideFileRouter(withEnabledBlockingInitialNavigation()),
      provideHttpClient(),
      provideStore(),
      provideStoreDevtools(),
      provideEffects(),
      provideEntriesFeature(),
      provideAppFeature(),
      // { provide: PreLoadDirective, useClass: PreLoadDirective },
      { provide: SERVER_CONTEXT, useValue: 'ssr-analog' },
    ],
  });

  return html;
}
