import {Component} from "@angular/core";
import {StructuralDirective} from "./structural.directive";

@Component({
  selector: 'app-structuralDirectives',
  standalone: true,
  imports: [
    StructuralDirective
  ],
  template: `
    <button (click)="onClick()">Show Element</button>

    <p *gamoChndes="show; then otherTemp; let avto = showOrNot" >Structural Directive: {{avto}}</p>

    <ng-template #otherTemp let-gio="showOrNot">
      <h2>I am other guy: {{gio}}</h2>
    </ng-template>

<!--    The same as:-->
<!--    <ng-template [gamoChndes]="show" >-->
<!--      <p>Structural Directive</p>-->
<!--    </ng-template>-->
  `,
  styles: ``
})
export class StructuralTesterComponent {
  public show: boolean = false;

  public onClick(){
    this.show = !this.show;
  }

}
