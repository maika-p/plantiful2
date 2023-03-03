import { NgIf } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLinkWithHref, NavbarComponent, NgIf],
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-navbar></app-navbar>
  `,
  styles: [],
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/entries']);
    // this.store.dispatch(AppActions.init());
  }

  initApp() {}

  ngAfterViewInit() {}
}
