import { Component, inject, OnInit, AfterViewInit } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppActions } from '../store/reducers/app.reducer';

@Component({
  standalone: true,
  imports: [RouterLinkWithHref, RouterOutlet],
  template: ``,
})
export default class HomeRoute implements AfterViewInit {
  store = inject(Store);

  ngAfterViewInit() {
    // const featureState = injectAppFeature();
    this.store.dispatch(AppActions.init());
    // featureState.init();
  }
}
