import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

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
  @Input() entryName: string | null = null;

  @Output() goBack = new EventEmitter();
}
