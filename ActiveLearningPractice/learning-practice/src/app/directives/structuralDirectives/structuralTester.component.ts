import {Component} from "@angular/core";
import {StructuralDirective} from "./structural.directive";

@Component({
  selector: 'app-structuralDirectives',
  standalone: true,
  imports: [
    StructuralDirective
  ],
  template: `
    <button (click)="show = !show">Show Element</button>
    <p *gamoChndes="show" >Structural Directive</p>


<!--    The same as:-->
<!--    <ng-template gamoChndes>-->
<!--      <p>Structural Directive</p>-->
<!--    </ng-template>-->
  `,
  styles: ``
})
export class StructuralTesterComponent {
  public show: boolean = false;

}
