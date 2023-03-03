import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { EntryDetailsContainer } from './../../../Entries/entry-details/entry-details.container';

@Component({
  standalone: true,
  imports: [AsyncPipe, JsonPipe, EntryDetailsContainer],
  template: `<app-entry-details></app-entry-details>`,
})
export default class EntryRouteContainer {}
