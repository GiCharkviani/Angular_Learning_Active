import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-twoWay',
  standalone: true,
  template: `
    <p>Name: {{name}}</p>
  `,
  styles: ``
})
export class TwoWayComponent {
  @Input() name!: string;

}
