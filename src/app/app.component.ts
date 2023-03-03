import { NgIf } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar';
import { TopbarComponent } from './topbar/topbar';

@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLinkWithHref,
    NavbarComponent,
    TopbarComponent,
    NgIf,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
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
