import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  Input,
  QueryList
} from "@angular/core";
import {ADVANCED_DI_COMPONENT, GrandChildComponent} from "./grandChild.component";
import {GrandGrandChildComponent} from "./grandGrandChild.component";


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
  @ContentChild(GrandGrandChildComponent, {descendants: false}) grandChild!: GrandGrandChildComponent;
  @ContentChildren(GrandChildComponent) grandChildren!: QueryList<GrandChildComponent>;

  @ContentChild('lonely') lonelyH2!: ElementRef;

  @ContentChild(ADVANCED_DI_COMPONENT) advancedDiComponent!: ElementRef;


  @Input() name!: string;
  @Input() age!: number;

  ngAfterContentInit() {
    console.log(this.grandChild, 'GRAND_CHILD');
    this.grandChildren.forEach((component) => console.log(component, 'GRAND_CHILDREN'));

    console.log(this.lonelyH2, 'VARIABLE_REFERENCE_CHILD');

    console.log(this.advancedDiComponent, 'ADVANCED_DI_COMPONENT');

  }
}
