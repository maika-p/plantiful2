import { AfterViewInit, Component, inject } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
@Component({
  standalone: true,
  imports: [RouterLinkWithHref, RouterOutlet],
  template: ``,
})
export default class HomeRoute implements AfterViewInit {
  store = inject(Store);

  ngAfterViewInit() {
    // const featureState = injectAppFeature();
    // this.store.dispatch(AppActions.init());
    // featureState.init();
  }
}
