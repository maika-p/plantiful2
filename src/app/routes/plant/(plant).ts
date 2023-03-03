import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import PlantComponent from '../../../Plant/plant';
@Component({
  standalone: true,
  imports: [RouterLink, PlantComponent],
  template: ` <app-plant></app-plant>`,
})
export default class PlantRouteContainer {
  // // featureState = injectEntriesFeature();
  // store = inject(Store);
  // ngOnInit() {
  //   this.store.dispatch(EntriesActions.enter());
  //   // this.featureState.enter();
  // }
  // onSelectEntry(entryId: number) {
  //   this.store.dispatch(EntriesActions.entrySelected({ entryId }));
  // }
}
