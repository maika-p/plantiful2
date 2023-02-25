import { RouterLink } from '@angular/router';
import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, NgFor, RouterLink],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export default class NavbarComponent {
  routes = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'plant',
      path: '/plant',
    },
    {
      name: 'Entries',
      path: '/entries',
    },
    {
      name: 'New Entry',
      path: '/new-entry',
    },
  ];
}
