import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Entry } from './../models/entries.models';

@Component({
  selector: 'app-entries-list-component',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor, MatIconModule],
  templateUrl: './entries-list.component.html',
  styleUrls: ['./entries-list.component.scss'],
})
export class EntriesListComponent {
  @Input() entries: Entry[] | null = [];
  @Output() selectEntry = new EventEmitter<number>();
}
