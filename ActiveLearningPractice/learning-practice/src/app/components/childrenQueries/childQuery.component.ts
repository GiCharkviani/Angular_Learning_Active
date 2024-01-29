import {Component, Input} from "@angular/core";


@Component({
  selector: 'app-childQuery',
  standalone: true,
  imports: [

  ],
  template: `
    <p>Child name: {{name}}</p>
    <p>Child age: {{age}}</p>
  `,
  styles: ``
})
export class ChildQueryComponent {
  @Input() name!: string;
  @Input() age!: number;

}
