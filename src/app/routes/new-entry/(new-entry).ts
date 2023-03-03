import { Component } from '@angular/core';
import NewEntryContainer from '../../../New-entry/new-entry/new-entry.container';

@Component({
  standalone: true,
  imports: [NewEntryContainer],
  template: ` <app-new-entry> </app-new-entry> `,
})
export class NewEntryRouteContainer {}
