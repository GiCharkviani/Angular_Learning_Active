import {AfterViewInit, Component, QueryList, ViewChild, ViewChildren} from "@angular/core";
import {ChildQueryComponent} from "./childQuery.component";


@Component({
  selector: 'app-childrenQueries',
  standalone: true,
  imports: [
    ChildQueryComponent
  ],
  template: `
    <app-childQuery name="avto" [age]="23"></app-childQuery>
    <app-childQuery name="gio" [age]="32"></app-childQuery>
  `,
  styles: ``
})
export class ChildrenQueriesTestingComponent implements AfterViewInit {
  @ViewChild(ChildQueryComponent) childComponent!: ChildQueryComponent;
  @ViewChildren(ChildQueryComponent) childComponents!: QueryList<ChildQueryComponent>;

  ngAfterViewInit() {
    console.log(this.childComponent, 'CHILD');
    this.childComponents.forEach(component => console.log(component, 'CHILDREN'))
  }


}
