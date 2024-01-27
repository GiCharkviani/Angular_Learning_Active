import {Component} from "@angular/core";
import {HostElementComponent} from "./hostElement.component";

@Component({
  selector: 'app-hostElementsTester',
  standalone: true,
  imports: [
    HostElementComponent
  ],
  template: `
    <app-hostElements></app-hostElements>
  `,
  styles: ``
})
export class HostElementsTesterComponent {


}
