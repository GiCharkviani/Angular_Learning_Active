import {Component, ViewContainerRef} from "@angular/core";
import {NgComponentOutlet, NgTemplateOutlet} from "@angular/common";
import {DynamicComponent} from "./dynamic.component";


@Component({
  selector: 'app-dynamicComponentsTester',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    NgComponentOutlet
  ],
  template: `

    <h1>Dynamic Components</h1>

    <h3>Template Outlet</h3>
    <ng-container *ngTemplateOutlet="avto; context: {name: 'Warsaw'}"></ng-container>

    <hr>
    <h3>Component Outlet</h3>
    <ng-container *ngComponentOutlet="dynamic"></ng-container>

    <hr>
    <h2>View Container Ref</h2>
    <button (click)="createComponent()">Create Component</button>

    <!--  Template  -->
    <ng-template #avto let-cityName="name">
      <p>I am a ng-template</p>
      <p>Name is: {{cityName}}</p>
    </ng-template>
  `,
  styles: ``
})
export class DynamicComponentsTesterComponent {
  public dynamic = DynamicComponent;

  constructor(private vcr: ViewContainerRef) {
  }

  createComponent() {
    
  }

}
