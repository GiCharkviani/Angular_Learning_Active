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
      <p>Names and Surnames: {{ namesAndSurnames }}</p>
      <input #inputElement (input)="onSetInput(inputElement.value)" type="text">
      <br>
      <input #secondInputElement placeholder=" - " #inputElement (input)="onUpdateInput(secondInputElement.value)" type="text">
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsTesterComponent {
  public names!: Signal<string>;
  public namesAndSurnames!: Signal<string>;

  constructor(private signalStateService: SignalStateService) {
    this.names = this.signalStateService.names;
    this.namesAndSurnames = this.signalStateService.namesAndSurnames;
  }

  public onSetInput(value: string): void {
    this.signalStateService.setNames(value)
  }

  public onUpdateInput(value: string): void {
    this.signalStateService.updateNames(value)
  }


}
