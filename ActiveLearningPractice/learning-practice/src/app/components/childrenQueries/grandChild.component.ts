import {Component, Input} from "@angular/core";


@Component({
  selector: 'app-grandChildQuery',
  standalone: true,
  imports: [

  ],
  template: `
    <p>Grand Child name: {{name}}</p>
    <p>Grand Child age: {{age}}</p>
  `,
  styles: ``
})
export class GrandChildComponent {
  @Input() name!: string;
  @Input() age!: number;

}
