import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from "@angular/core";
import {ChildQueryComponent} from "./childQuery.component";
import {GrandChildComponent} from "./grandChild.component";


@Component({
  selector: 'app-childrenQueries',
  standalone: true,
  imports: [
    ChildQueryComponent,
    GrandChildComponent
  ],
  template: `
    <app-childQuery name="avto" [age]="23">
      <app-grandChildQuery  name="vaza" [age]="51"></app-grandChildQuery>
      <app-grandChildQuery  name="guga" [age]="74"></app-grandChildQuery>

      <h2 #lonely>I am lonely CHILD oooo</h2>
    </app-childQuery>

    <app-childQuery name="gio" [age]="32"></app-childQuery>

    <h2 #lonely>I am lonely oooo</h2>
  `,
  styles: ``
})
export class ChildrenQueriesTestingComponent implements AfterViewInit {
  @ViewChild(ChildQueryComponent) childComponent!: ChildQueryComponent;
  @ViewChildren(ChildQueryComponent) childComponents!: QueryList<ChildQueryComponent>;

  @ViewChild('lonely') lonelyH2!: ElementRef;

  ngAfterViewInit() {
    console.log(this.childComponent, 'CHILD');
    this.childComponents.forEach(component => console.log(component, 'CHILDREN'));

    console.log(this.lonelyH2, 'VARIABLE_REFERENCE');
  }


}
