import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

import { NgtCanvas } from '@angular-three/core';
import { NgtMesh } from '@angular-three/core/meshes';
import { NgtBoxGeometry } from '@angular-three/core/geometries';
import { NgtMeshStandardMaterial } from '@angular-three/core/materials';
import { NgtColorAttribute } from '@angular-three/core/attributes';

@Component({
  selector: 'app-plant',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgtCanvas,
    NgtMesh,
    NgtBoxGeometry,
    NgtMeshStandardMaterial,
    NgtColorAttribute,
  ],
  templateUrl: './plant.html',
  styleUrls: ['./plant.scss'],
})
export default class PlantComponent {}
