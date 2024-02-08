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
      <input #inputElement (input)="onSetInput(inputElement.value)" type="text">
      <br>
      <input placeholder=" - " #inputElement (input)="onUpdateInput(inputElement.value)" type="text">
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

  public onSetInput(value: string): void {
    this.signalStateService.setNames(value)
  }

  public onUpdateInput(value: string): void {
    this.signalStateService.updateNames(value)
  }


}
