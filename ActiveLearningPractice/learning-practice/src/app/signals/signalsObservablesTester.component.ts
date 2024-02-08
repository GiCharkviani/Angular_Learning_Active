import {Component, Signal} from "@angular/core";
import {SignalStateService} from "./signalState.service";


@Component({
  selector: 'app-signalsObservables',
  standalone: true,
  imports: [],
  template: `
    <p>People: {{ people() }}</p>
  `,
  styles: ``
})
export class SignalsObservablesTesterComponent  {
  /* Signals & Observables */
  public people!: Signal<string | undefined>;

  constructor(private signalStateService: SignalStateService) {
    this.people = this.signalStateService.people;
  }
}
