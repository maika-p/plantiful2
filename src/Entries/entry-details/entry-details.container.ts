import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EntriesActions } from '../store/reducers/entries.reducer';
import { selectCurrentEntry } from './../store/reducers/entries.reducer';
import EntryDetailsComponent from './entry-details.component';
@Component({
  selector: 'app-entry-details',
  standalone: true,
  imports: [AsyncPipe, EntryDetailsComponent, NgIf],
  template: `
    <app-entry-details-component
      *ngIf="entry$ | async as entry"
      [entryName]="entry.name"
      [entryId]="entry.id"
      (goBack)="onGoBack()"
    >
    </app-entry-details-component>
  `,
})
export class EntryDetailsContainer {
  constructor(private store: Store) {}

  readonly entry$ = this.store.select(selectCurrentEntry);

  onGoBack() {
    this.store.dispatch(EntriesActions.goBack());
  }
}
