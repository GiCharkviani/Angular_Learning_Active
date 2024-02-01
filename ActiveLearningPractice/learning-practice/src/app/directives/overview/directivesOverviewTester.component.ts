import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-directivesOverview',
  standalone: true,
  imports: [
    FormsModule
  ],
  template: `
    <input [(ngModel)]="name" type="text">
    <h4>Parent name: {{name}}</h4>

  `,
  styles: ``
})
export class DirectivesOverviewTesterComponent {
  public name!: string;

}
