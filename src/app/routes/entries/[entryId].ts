import { Store } from '@ngrx/store';
import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import {
  EntriesActions,
  selectEntry,
} from '../../../Entries/store/reducers/entries.reducer';
import EntryDetailsComponent from '../../../Entries/entry-details/entry-details';

@Component({
  standalone: true,
  imports: [AsyncPipe, JsonPipe, EntryDetailsComponent],
  template: `
    <app-entry-details
      [entryId]="(entry$ | async)!.id"
      [entryName]="(entry$ | async)!.name"
      (goBack)="onGoBack()"
    ></app-entry-details>
  `,
})
export default class EntryRouteContainer implements OnInit {
  store = inject(Store);
  readonly entry$ = this.store.select(selectEntry);
  ngOnInit() {}

  onGoBack() {
    this.store.dispatch(EntriesActions.goBack());
  }
}
