import {Component} from "@angular/core";
import {MagicDirective} from "./magic.directive";

@Component({
  selector: 'app-attributeDirectives',
  standalone: true,
  imports: [
    MagicDirective
  ],
  template: `
    <div magicDir defaultColor="red">
      <p>My name is: My Name is: My name is - Eminem</p>
    </div>

    <h2 magicDir (changedColor)="onChangeColor($event)">Other Element</h2>

    <p ngNonBindable>{{5 + 5}}</p>
  `,
  styles: ``
})
export class AttributeTesterComponent {

  public onChangeColor(value: any) {
    console.log(value, 'CHANGED_COLOR')
  }

}
