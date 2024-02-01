import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {TwoWayComponent} from "./twoWay.component";

@Component({
  selector: 'app-directivesOverview',
  standalone: true,
  imports: [
    FormsModule,
    TwoWayComponent
  ],
  template: `
    <input [(ngModel)]="name" type="text">
    <h4>Parent name: {{name}}</h4>

    <app-twoWay [(name)]="childName"></app-twoWay>
    <h4>Child name in Parent: {{childName}}</h4>
  `,
  styles: ``
})
export class DirectivesOverviewTesterComponent {
  public name!: string;
  public childName!: string;

}
