import {ChangeDetectionStrategy, Component, signal} from "@angular/core";

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
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsTesterComponent {
  /* Writable Signals */
  public names = signal('');

  public onInput(value: string): void {
    this.names.set(value);
  }


}
