import {Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'app-styles',
  standalone: true,
  imports: [],
  template: `
        <h1>My styles</h1>
  `,
  styles: `
    h1 {
    color: red;
    }
  `,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class StylesTesterComponent {

}
