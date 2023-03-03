import { Entry } from './models/entries.models';
import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EntriesService {
  entries: Entry[] = [];

  http = inject(HttpClient);

  getEntries() {
    return this.http.get<Entry[]>('/api/v1/entries');
  }
}
