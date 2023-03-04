import { NgtCanvas } from '@angular-three/core';
import { NgtColorAttribute } from '@angular-three/core/attributes';
import { NgtMeshStandardMaterial } from '@angular-three/core/materials';
import { Component } from '@angular/core';
import { NgtSobaText3d } from '@angular-three/soba/abstractions';
import { NgtSobaOrbitControls } from '@angular-three/soba/controls';

import { NgtAmbientLight, NgtPointLight } from '@angular-three/core/lights';

@Component({
  selector: 'app-ent',
  standalone: true,
  imports: [
    NgtCanvas,
    NgtMeshStandardMaterial,
    NgtSobaOrbitControls,
    NgtColorAttribute,
    NgtSobaText3d,
    NgtAmbientLight,
    NgtPointLight,
  ],
  templateUrl: 'ent.html',
})
export default class EntComponent {}
