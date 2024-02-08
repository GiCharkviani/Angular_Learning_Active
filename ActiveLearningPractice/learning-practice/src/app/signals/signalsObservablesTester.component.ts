import {Component} from "@angular/core";
import {SignalStateService} from "./signalState.service";


@Component({
  selector: 'app-signalsObservables',
  standalone: true,
  imports: [],
  template: `
  `,
  styles: ``
})
export class SignalsObservablesTesterComponent  {
  /* Signals & Observables */

  constructor(private signalStateService: SignalStateService) {
  }
}
