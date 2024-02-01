import {Component} from "@angular/core";
import {MagicDirective} from "./magic.directive";

@Component({
  selector: 'app-attributeDirectives',
  standalone: true,
  imports: [
    MagicDirective
  ],
  template: `
    <div magiDir>
      <p>My name is: My Name is: My name is - Eminem</p>
    </div>

    <h2 magiDir>Other Element</h2>
  `,
  styles: ``
})
export class AttributeTesterComponent {


}
