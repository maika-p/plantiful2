import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Store } from '@ngrx/store';

// import { NgtCanvas } from '@angular-three/core';
// import { NgtMesh } from '@angular-three/core/meshes';
// import { NgtBoxGeometry } from '@angular-three/core/geometries';
// import { NgtMeshStandardMaterial } from '@angular-three/core/materials';
// import { NgtColorAttribute } from '@angular-three/core/attributes';
import NavbarComponent from './navbar/navbar';
import { injectAppFeature } from './store/app-state';
@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLinkWithHref, NavbarComponent],
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-navbar></app-navbar>

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
  // store = inject(Store);
  featureState = injectAppFeature();

  ngOnInit() {
    this.featureState.init();
  }
}
