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
      <p>Surnames: {{ surnames() }}</p>
      <p>Names and Surnames: {{ namesAndSurnames() }}</p>
      <input placeholder="Name" #inputElement (input)="onSetInput(inputElement.value)" type="text">
      <br>
      <input placeholder="Surname" #surnameInputElement (input)="onSetSurname(surnameInputElement.value)" type="text">
      <br>
      <input #secondInputElement placeholder="Name - Surname" #inputElement (change)="onUpdateInput(secondInputElement.value)" type="text">
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsTesterComponent {
  public names!: Signal<string>;
  public namesAndSurnames!: Signal<string>;
  public surnames!: Signal<string>;

  constructor(private signalStateService: SignalStateService) {
    this.names = this.signalStateService.names;
    this.namesAndSurnames = this.signalStateService.namesAndSurnames;
    this.surnames = this.signalStateService.surnames;


    /* Effects */
    
  }

  public onSetSurname(value: string) {
    this.signalStateService.setSurnames(value);
  }

  public onSetInput(value: string): void {
    this.signalStateService.setNames(value)
  }

  public onUpdateInput(value: string): void {
    this.signalStateService.updateNames(value)
  }


}
