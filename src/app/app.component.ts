import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { NgtCanvas } from '@angular-three/core';
import { NgtMesh } from '@angular-three/core/meshes';
import { NgtBoxGeometry } from '@angular-three/core/geometries';
import { NgtMeshStandardMaterial } from '@angular-three/core/materials';
import { NgtColorAttribute } from '@angular-three/core/attributes';
@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLinkWithHref,
    NgtCanvas,
    NgtMesh,
    NgtBoxGeometry,
    NgtMeshStandardMaterial,
    NgtColorAttribute,
  ],
  selector: 'app-root',
  template: `
    <a routerLink="/">Homea</a>
    <router-outlet></router-outlet>

    <!-- <div class="canvas-container">
      <ngt-canvas class="canvas">
        <ngt-color attach="background" color="lightblue"></ngt-color>
        <ngt-mesh [scale]="1">
          <ngt-box-geometry></ngt-box-geometry>
        </ngt-mesh>
      </ngt-canvas>
    </div> -->
  `,
  styles: [
    '.canvas-container { display: flex;  align-items: center; justify-content: center;   }',
    '.canvas { height: 500px; width: 500px; }',
  ],
})
export class AppComponent implements OnInit {
  color: string | null = 'aa';
  numbero: Number = 1;

  key() {
    const helloo = '';

    return helloo;
  }

  ngOnInit(): void {
    console.log(this.numbero);

    console.log(this.key());
  }

  // he
}
