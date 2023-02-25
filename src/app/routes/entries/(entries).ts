import { AsyncPipe } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EntriesActions, injectEntriesFeature } from '../../store/entries';
import EntriesListComponent from '../../entries/entries-list/entries-list';
import { Store } from '@ngrx/store/src';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, RouterOutlet, EntriesListComponent, AsyncPipe],
  template: `
    <app-entries-list
      [entries]="entries$ | async"
      (selectEntry)="onSelectEntry($event)"
    >
    </app-entries-list>
    <router-outlet></router-outlet>
  `,
})
export default class EntriesContainer {
  readonly vm = injectEntriesFeature();
  readonly entries$ = this.vm.entries$;

  ngOnInit() {
    this.vm.enter();
    this.entries$.subscribe((a) => console.log(a));
  }

  onSelectEntry(entryId: number) {
    console.log(entryId);

    EntriesActions.entrySelected({ entryId });
  }
}
