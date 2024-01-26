import {Component, Input, numberAttribute} from "@angular/core";

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
  @Input({transform: numberAttribute}) age!: number;

  lastName: string = 'lasta'

  constructor() {
    console.warn('PARENT CREATED')
  }

}
