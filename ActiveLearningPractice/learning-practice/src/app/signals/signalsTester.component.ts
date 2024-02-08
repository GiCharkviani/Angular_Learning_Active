import {Component, signal} from "@angular/core";

@Component({
  selector: 'app-signalsTester',
  standalone: true,
  imports: [

  ],
  template: `
    <h2>Writable Signals</h2>
    <div>
      <p>Names: {{ names() }}</p>
      <input #inputElement (input)="onInput(inputElement.value)" type="text">
    </div>
  `,
  styles: ``
})
export class SignalsTesterComponent {
  /* Writable Signals */
  public names = signal(null);

  public onInput(value: string): void {
    
  }


}
