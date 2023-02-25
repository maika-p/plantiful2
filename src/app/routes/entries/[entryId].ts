import { Store } from '@ngrx/store';
import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { selectEntry } from '../../store/entries-state';
import EntryDetailsComponent from '../../entries/entry-details/entry-details';

@Component({
  standalone: true,
  imports: [AsyncPipe, JsonPipe, EntryDetailsComponent],
  template: `
    <app-entry-details
      [entryId]="(entry$ | async).id"
      [entryName]="(entry$ | async).name"
    ></app-entry-details>
  `,
})
export default class EntryContainer implements OnInit {
  store = inject(Store);
  readonly entry$ = this.store.select(selectEntry);
  ngOnInit() {
    this.entry$.subscribe((a) => console.log(a));
  }

  // onSelectEntry(entryId: number) {
  //   this.store.dispatch(EntriesActions.entrySelected({ entryId }));
  // }
}
