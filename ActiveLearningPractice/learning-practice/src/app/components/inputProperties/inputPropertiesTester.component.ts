import {Component} from "@angular/core";
import {ParentComponent} from "./parent.component";
import {ChildComponent} from "./child.component";

@Component({
  selector: 'app-inputProperties',
  standalone: true,
  imports: [
    ParentComponent,
    ChildComponent
  ],
  template: `
    <app-child></app-child>
  `,
  styles: `
  `
})
export class InputPropertiesTesterComponent {
  
}
