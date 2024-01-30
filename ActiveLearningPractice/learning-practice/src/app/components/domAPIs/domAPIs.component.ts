import {afterNextRender, Component, ElementRef, Renderer2} from "@angular/core";


@Component({
  selector: 'app-domapisTester',
  standalone: true,
  imports: [
  ],
  template: `
    <h2>DOM APIs</h2>
    <input type="text">
  `,
  styles: ``
})
export class DomAPIsComponent {

  constructor(elementRef: ElementRef, private renderer: Renderer2) {
    console.log(elementRef);
    this.renderer.addClass(elementRef.nativeElement, 'testClass')

    afterNextRender(() => {
      elementRef.nativeElement.querySelector('input')?.focus();
    })

  }

}
