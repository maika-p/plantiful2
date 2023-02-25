import { RouterLink } from '@angular/router';
import { Entry } from './../../store/entries';
import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-entries-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, JsonPipe, NgFor, RouterLink],
  templateUrl: './entries-list.html',
  styleUrls: ['./entries-list.scss'],
})
export default class EntriesListComponent {
  @Input() entries: Entry[] | null = [];
  @Output() selectEntry = new EventEmitter<number>();
}
