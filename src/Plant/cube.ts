import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  OnInit,
} from '@angular/core';

import { NgtRenderState } from '@angular-three/core';
import { NgtColorAttribute } from '@angular-three/core/attributes';
import { NgtBoxGeometry } from '@angular-three/core/geometries';
import { NgtMeshStandardMaterial } from '@angular-three/core/materials';
import { NgtMesh } from '@angular-three/core/meshes';
import { Mesh } from 'three';
@Component({
  selector: 'app-cube',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgtMesh,
    NgtBoxGeometry,
    NgtMeshStandardMaterial,
    NgtColorAttribute,
  ],
  templateUrl: './cube.html',
})
export default class CubeComponent {
  hovered = false;
  active = false;
  onCubeBeforeRender($event: { state: NgtRenderState; object: Mesh }) {
    const cube = $event.object;
    // we are rotating our cube little by little before it gets rendered 😂😂
    cube.rotation.x += 0.001;
    cube.rotation.z += 0.002;
    cube.rotation.y += 0.003;
  }
}
