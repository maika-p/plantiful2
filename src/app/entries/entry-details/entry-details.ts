import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-entry-details',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: 'entry-details.html',
  styleUrls: ['./entry-details.scss'],
})
export default class EntryDetailsComponent {
  @Input() entryId: Number | null = null;
  @Input() entryName: Number | null = null;
}
