import {Component, Signal} from "@angular/core";
import {SignalStateService} from "./signalState.service";


@Component({
  selector: 'app-signalsObservables',
  standalone: true,
  imports: [],
  template: `
    <p>People: {{ people() }}</p>
    <input #inputElement (change)="onChange(inputElement.value)" type="text">
  `,
  styles: ``
})
export class SignalsObservablesTesterComponent  {
  /* Signals & Observables */
  public people!: Signal<any>;

  constructor(private signalStateService: SignalStateService) {
    this.people = this.signalStateService.people;

    this.signalStateService.names$.subscribe(data => console.log(data, 'FROM_OBSERVABLE'))
  }

  onChange(value: string) {
    this.signalStateService.addPeople(value);
  }
}
