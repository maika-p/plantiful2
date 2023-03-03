import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NgtCanvas } from '@angular-three/core';
import { NgtColorAttribute } from '@angular-three/core/attributes';
import CubeComponent from './cube';
import {
  NgtAmbientLight,
  NgtSpotLight,
  NgtPointLight,
} from '@angular-three/core/lights';
import { NgtSobaOrbitControls } from '@angular-three/soba/controls';

@Component({
  selector: 'app-plant',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CubeComponent,
    NgtCanvas,
    NgtAmbientLight,
    NgtSpotLight,
    NgtPointLight,
    NgtColorAttribute,
    NgtSobaOrbitControls,
  ],
  templateUrl: './plant.html',
  styleUrls: ['./plant.scss'],
})
export default class PlantComponent {}
