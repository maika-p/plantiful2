import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import EntryDetailsComponent from '../../entries/entry-details/entry-details';
@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, JsonPipe, EntryDetailsComponent],
  template: `
    <h2>Entry Details</h2>
    <app-entry-details [entryId]="id"></app-entry-details>
  `,
})
export default class EntryContainer {
  id = '1';
}
