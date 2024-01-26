import {Component, OnInit, TemplateRef, ViewChild} from "@angular/core";
import {ParentComponent} from "./parent.component";
import {ChildComponent} from "./child.component";

@Component({
  selector: 'app-inputProperties',
  standalone: true,
  imports: [
    ParentComponent,
    ChildComponent
  ],
  template: `
    <app-child
      parentName="Gio"
      parentAge="23"
      [hobby]="23"
      amIStudent="0"
      myDogName="Jeka"
      FavFood="Banana"
    ></app-child>
  `,
  styles: ``
})
export class InputPropertiesTesterComponent implements OnInit {
  @ViewChild(ChildComponent, {static: true}) child: TemplateRef<ChildComponent> | undefined;

  ngOnInit() {
    console.log(this.child);
  }

}
