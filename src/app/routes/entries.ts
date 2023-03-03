import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EntriesListContainer } from '../../Entries/entries-list/entries-list.container';
@Component({
  standalone: true,
  imports: [EntriesListContainer, RouterOutlet],
  template: ` <router-outlet></router-outlet> `,
})
export default class EntriesRoute {}
