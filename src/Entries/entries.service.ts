import { Entry } from './models/entries.models';
import { Injectable, inject, EnvironmentInjector } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class EntriesService {
  entries: Entry[] = [];

  http = inject(HttpClient);

  getEntries() {
    return this.http.get<any>('/api/v1/entries');
  }
}
