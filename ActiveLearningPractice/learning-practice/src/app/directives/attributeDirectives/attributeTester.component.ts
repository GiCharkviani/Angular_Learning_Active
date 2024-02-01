import {Component} from "@angular/core";
import {MagicDirective} from "./magic.directive";

@Component({
  selector: 'app-attributeDirectives',
  standalone: true,
  imports: [
    MagicDirective
  ],
  template: `
    <div magiDir defaultColor="red">
      <p>My name is: My Name is: My name is - Eminem</p>
    </div>

    <h2 magiDir>Other Element</h2>
  `,
  styles: ``
})
export class AttributeTesterComponent {


}
