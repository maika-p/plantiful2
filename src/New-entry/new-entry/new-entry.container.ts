import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-new-entry',
  standalone: true,
  imports: [],
  templateUrl: 'new-entry.container.html',
  styleUrls: ['./new-entry.container.scss'],
})
export default class NewEntryContainer {}
