import {afterNextRender, Component, ElementRef} from "@angular/core";


@Component({
  selector: 'app-domapis',
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

  constructor(elementRef: ElementRef) {
    console.log(elementRef)

    afterNextRender(() => {
      elementRef.nativeElement.querySelector('input')?.focus();
    })
  }

}
