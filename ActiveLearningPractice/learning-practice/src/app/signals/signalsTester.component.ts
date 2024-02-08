import {ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, Signal, signal} from "@angular/core";
import {SignalStateService} from "./signalState.service";

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
  public names!: Signal<string>;

  constructor(private signalStateService: SignalStateService) {
    this.names = this.signalStateService.names;
  }

  public onInput(value: string): void {
    this.signalStateService.updateNames(value)
  }


}
