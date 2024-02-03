import {Component} from "@angular/core";
import {StructuralDirective} from "./structural.directive";

@Component({
  selector: 'app-structuralDirectives',
  standalone: true,
  imports: [
    StructuralDirective
  ],
  template: `
    <p gamoChndes>Structural Directive</p>
  `,
  styles: ``
})
export class StructuralTesterComponent {

}
