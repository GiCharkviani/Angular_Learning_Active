import {Component} from "@angular/core";
import {MagicDirective} from "./magic.directive";

@Component({
  selector: 'app-attributeDirectives',
  standalone: true,
  imports: [
    MagicDirective
  ],
  template: `
    <div>
      <p>My name is: My Name is: My name is - Eminem</p>
    </div>
  `,
  styles: ``
})
export class AttributeTesterComponent {


}
