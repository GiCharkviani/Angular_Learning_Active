import {
  AfterViewInit,
  Component,
  ElementRef,
  InjectionToken,
  OnInit,
  QueryList, TemplateRef,
  ViewChild,
  ViewChildren, ViewContainerRef
} from "@angular/core";
import {ChildQueryComponent} from "./childQuery.component";
import {GrandChildComponent} from "./grandChild.component";
import {GrandGrandChildComponent} from "./grandGrandChild.component";


@Component({
  selector: 'app-childrenQueries',
  standalone: true,
  imports: [
    ChildQueryComponent,
    GrandChildComponent,
    GrandGrandChildComponent
  ],
  template: `
    <app-childQuery name="avto" [age]="23">
      <app-grandChildQuery  name="vaza" [age]="51">
        <app-grandGrandChildQuery name="ucnaura" [age]="33"></app-grandGrandChildQuery>
      </app-grandChildQuery>
      <app-grandChildQuery  name="guga" [age]="74"></app-grandChildQuery>

      <h2 #lonely>I am lonely CHILD oooo</h2>
    </app-childQuery>

    <app-childQuery name="gio" [age]="32"></app-childQuery>

    <h2 #lonely>I am lonely oooo</h2>

    <ng-template #myTemplate></ng-template>
  `,
  styles: ``
})
export class ChildrenQueriesTestingComponent implements AfterViewInit, OnInit {
  @ViewChild(ChildQueryComponent, {static: true, read: ViewContainerRef}) childComponent!: ChildQueryComponent;
  @ViewChild('myTemplate', {static: true, read: ElementRef}) myTemplate!: TemplateRef<any>;
  @ViewChildren(ChildQueryComponent) childComponents!: QueryList<ChildQueryComponent>;

  @ViewChild('lonely', {read: ViewContainerRef}) lonelyH2!: ElementRef;

  ngOnInit() {
    console.log(this.childComponent, 'CHILD_static');
    console.log(this.myTemplate, 'TEMPLATE_REF')
  }

  ngAfterViewInit() {
    console.log(this.childComponent, 'CHILD');

    this.childComponents.forEach(component => console.log(component, 'CHILDREN'));

    console.log(this.lonelyH2, 'VARIABLE_REFERENCE');
  }


}
