import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-twoWay',
  standalone: true,
  template: `
    <p>Name in child: {{ name }}</p>
    <input #nameInput (input)="nameChange.emit(nameInput.value)" type="text">
  `,
  imports: [
    ReactiveFormsModule
  ],
  styles: ``
})
export class TwoWayComponent {
  @Input() name!: string;
  @Output() nameChange = new EventEmitter();

}
