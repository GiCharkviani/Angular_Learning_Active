import {Component, Input} from "@angular/core";


@Component({
  selector: 'app-grandGrandChildQuery',
  standalone: true,
  imports: [],
  template: `
    <p>Grand Grand Child name: {{name}}</p>
    <p>Grand Grand Child age: {{age}}</p>
  `,
  styles: ``
})
export class GrandGrandChildComponent {
  @Input() name!: string;
  @Input() age!: number;

}
