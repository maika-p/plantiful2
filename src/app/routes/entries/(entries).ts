import { Component } from '@angular/core';
import { EntriesListContainer } from '../../../Entries/entries-list/entries-list.container';

@Component({
  standalone: true,
  imports: [EntriesListContainer],
  template: ` <app-entries-list> </app-entries-list> `,
})
export default class EntriesRouteContainer {}
