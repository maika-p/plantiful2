import { RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, NgFor, RouterLink, MatIconModule, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class NavbarComponent {
  routes = [
    {
      name: 'entries',
      path: 'entries',
      matIcon: 'list',
    },

    {
      name: 'new entry',
      path: `new-entry`,
      matIcon: 'add_circle_outline',
    },
    {
      name: 'plant',
      path: 'plant',
      matIcon: 'local_florist',
    },
  ];
}
