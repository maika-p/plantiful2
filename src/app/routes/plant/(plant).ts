import { Component } from '@angular/core';
import PlantComponent from '../../../Plant/plant';
@Component({
  standalone: true,
  imports: [PlantComponent],
  template: ` <app-plant></app-plant>`,
})
export default class PlantRouteContainer {}
