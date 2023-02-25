import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
@Component({
  standalone: true,
  imports: [RouterLinkWithHref, RouterOutlet],
  template: `
    <h2>Home container</h2>
    <a routerLink="/entries">Entries</a> |
    <a routerLink="/new-entry">New entry</a> |
    <a routerLink="/onboarding">Onboarding</a> |
    <a routerLink="/settings">Settings</a>
  `,
})
export default class HomeComponent {}
