import {Component, EventEmitter, Input, Output} from "@angular/core";


@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [
  ],
  template: `
    <p>Name: {{name}}</p>
    <p>Age: {{age}}</p>
    <p>Hobby: {{hobby}}</p>

    <button (click)="onClick()">Emit Name</button>
  `,
  styles: ``
})
export class DynamicComponent {
  @Input() name!: string;
  @Input() age!: number;
  hobby: string = 'Programming'

  @Output() nameIs = new EventEmitter();

  onClick() {
    this.nameIs.emit(this.name);
  }
}
