import {AfterContentInit, Component, ContentChild, ContentChildren, Input, QueryList} from "@angular/core";
import {GrandChildComponent} from "./grandChild.component";


@Component({
  selector: 'app-childQuery',
  standalone: true,
  imports: [

  ],
  template: `
    <p>Child name: {{name}}</p>
    <p>Child age: {{age}}</p>
    <hr>
    <ng-content></ng-content>
  `,
  styles: ``
})
export class ChildQueryComponent implements AfterContentInit {
  @ContentChild(GrandChildComponent) grandChild!: GrandChildComponent;
  @ContentChildren(GrandChildComponent) grandChildren!: QueryList<GrandChildComponent>;

  @Input() name!: string;
  @Input() age!: number;

  ngAfterContentInit() {
    console.log(this.grandChild, 'GRAND_CHILD')
    this.grandChildren.forEach((component) => console.log(component, 'GRAND_CHILDREN'))
  }
}
