import { AfterViewInit, Directive, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPreLoad]',
  standalone: true,
})
export class PreLoadDirective implements AfterViewInit {
  renderer = inject(Renderer2);

  ngAfterViewInit() {
    const loadingElement = this.renderer.selectRootElement('#loading');

    setTimeout(() => {
      console.log('Delayed for 1 second.');
    }, 1000);

    setTimeout(() => {
      this.renderer.setStyle(loadingElement, 'display', 'none');
    }, 5000000);
  }
}
