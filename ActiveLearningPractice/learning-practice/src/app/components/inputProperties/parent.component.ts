import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [],
  template: `
    <h2>Parent</h2>
  `,
  styles: `
  `
})
export class ParentComponent {
  @Input() name!: string;
  @Input() age!: number;

  lastName: string = 'lasta'

  constructor() {
    console.warn('PARENT CREATED')
  }

}
