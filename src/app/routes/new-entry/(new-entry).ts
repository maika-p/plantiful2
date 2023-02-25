import { Store } from '@ngrx/store';
import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  template: ` <p>helo</p> `,
})
export default class NewEntryContainer implements OnInit {
  store = inject(Store);
  ngOnInit() {}

  // onSelectEntry(entryId: number) {
  //   this.store.dispatch(EntriesActions.entrySelected({ entryId }));
  // }
}
