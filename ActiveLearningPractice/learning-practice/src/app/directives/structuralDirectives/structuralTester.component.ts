import {Component} from "@angular/core";
import {StructuralDirective} from "./structural.directive";

@Component({
  selector: 'app-structuralDirectives',
  standalone: true,
  imports: [
    StructuralDirective
  ],
  template: `
    <p *gamoChndes>Structural Directive</p>


<!--    The same as:-->
<!--    <ng-template gamoChndes>-->
<!--      <p>Structural Directive</p>-->
<!--    </ng-template>-->
  `,
  styles: ``
})
export class StructuralTesterComponent {

}
