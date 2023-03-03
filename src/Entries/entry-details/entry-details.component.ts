import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
@Component({
  selector: 'app-entry-details-component',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'entry-details.component.html',
  styleUrls: ['./entry-details.component.scss'],
})
export default class EntryDetailsComponent {
  @Input() entryId: Number | null = null;
  @Input() entryName: string | null = null;
  @Output() goBack = new EventEmitter();
}
