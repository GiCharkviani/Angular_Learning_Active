import {Component} from "@angular/core";
import {ParentComponent} from "./parent.component";

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: `
    <h2>Child</h2>
  `,
  styles: `
  `
})
export class ChildComponent extends ParentComponent {

  constructor() {
    super();
    console.warn('CHILD CREATED')
  }

}
