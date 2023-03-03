import { Store } from '@ngrx/store';
import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import NewEntryContainer from '../../../New-entry/new-entry/new-entry.container';

@Component({
  standalone: true,
  imports: [AsyncPipe, JsonPipe, NewEntryContainer],
  template: ` <app-new-entry> </app-new-entry> `,
})
export default class NewEntryFeatureContainer implements OnInit {
  // store = inject(Store);
  ngOnInit() {}

  // onSelectEntry(entryId: number) {
  //   this.store.dispatch(EntriesActions.entrySelected({ entryId }));
  // }
}
