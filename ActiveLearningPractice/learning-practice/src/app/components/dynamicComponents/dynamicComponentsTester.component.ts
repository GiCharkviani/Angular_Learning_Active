import {Component} from "@angular/core";


@Component({
  selector: 'app-dynamicComponentsTester',
  standalone: true,
  imports: [

  ],
  template: `

    <h1>Dynamic Components</h1>
    <h3>Template Outlet</h3>

    <h3>Component Outlet</h3>

    <h3>View Container Ref</h3>

    <!--  Template  -->
    <ng-template>
      <p>I am a ng-template</p>
    </ng-template>
  `,
  styles: ``
})
export class DynamicComponentsTesterComponent {


}
