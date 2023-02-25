import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  EntriesActions,
  selectEntries,
  selectCurrentEntryId,
} from '../../store/entries-state';
import EntriesListComponent from '../../entries/entries-list/entries-list';

@Component({
  standalone: true,
  imports: [RouterLink, RouterOutlet, AsyncPipe, EntriesListComponent],
  template: `
    <app-entries-list
      [entries]="entries$ | async"
      (selectEntry)="onSelectEntry($event)"
    >
    </app-entries-list>
  `,
})
export default class EntriesListContainer {
  // featureState = injectEntriesFeature();
  store = inject(Store);
  readonly entries$ = this.store.select(selectEntries);
  readonly currentId$ = this.store.select(selectCurrentEntryId);

  ngOnInit() {
    this.store.dispatch(EntriesActions.enter());
    // this.featureState.enter();
  }

  onSelectEntry(entryId: number) {
    this.store.dispatch(EntriesActions.entrySelected({ entryId }));
  }
}
