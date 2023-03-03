import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
@Component({
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet></router-outlet> `,
})
export class NewEntryRoute {}
