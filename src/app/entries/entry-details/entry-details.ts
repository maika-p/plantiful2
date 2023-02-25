import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-entry-details',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: 'entry-details.html',
})
export default class EntryDetailsComponent {
  @Input() entryId: String | null = null;
}
