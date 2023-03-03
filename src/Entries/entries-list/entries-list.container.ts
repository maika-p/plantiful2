import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  EntriesActions,
  selectCurrentEntryId,
  selectEntries,
} from '../../Entries/store/reducers/entries.reducer';
import { EntriesListComponent } from './entries-list.component';

@Component({
  selector: 'app-entries-list',
  standalone: true,
  imports: [RouterLink, RouterOutlet, AsyncPipe, EntriesListComponent],

  template: `
    <app-entries-list-component
      [entries]="entries$ | async"
      (selectEntry)="onSelectEntry($event)"
    >
    </app-entries-list-component>
  `,
})
export class EntriesListContainer {
  store = inject(Store);
  readonly entries$ = this.store.select(selectEntries);
  readonly currentId$ = this.store.select(selectCurrentEntryId);
  ngOnInit() {
    this.store.dispatch(EntriesActions.initEntries());
  }
  onSelectEntry(entryId: number) {
    this.store.dispatch(EntriesActions.entrySelected({ entryId }));
  }
}
