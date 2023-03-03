import { HttpClient } from '@angular/common/http';

export class NewEntryService {
  constructor(private http: HttpClient) {}

  getEntries() {
    return this.http.get('/api/entries');
  }
}
