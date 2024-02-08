import {ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, signal} from "@angular/core";
import {SignalStateService} from "./signalState.service";

@Component({
  selector: 'app-signalsTester',
  standalone: true,
  imports: [

  ],
  template: `
    <h2>Writable Signals</h2>
    <div>
      <input #inputElement (input)="onInput(inputElement.value)" type="text">
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsTesterComponent {

  constructor(private signalStateService: SignalStateService) {
  }

  public onInput(value: string): void {

  }


}
