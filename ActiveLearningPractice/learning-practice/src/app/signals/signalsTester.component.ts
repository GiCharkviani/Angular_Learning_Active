import {ChangeDetectionStrategy, Component, effect, Signal, WritableSignal} from "@angular/core";
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
      <br>
      <button (click)="logSurname()">Log Surname</button>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsTesterComponent {
  public names!: WritableSignal<string>;
  public namesAndSurnames!: Signal<string>;
  public surnames!: WritableSignal<string>;

  constructor(private signalStateService: SignalStateService) {
    this.names = this.signalStateService.names;
    this.namesAndSurnames = this.signalStateService.namesAndSurnames;
    this.surnames = this.signalStateService.surnames;


    /* Effects */
    effect( () => {
      const names = this.names();
      // this.names.set('dsada') // ar qna
      console.log(names, 'NAMES');
    }, {allowSignalWrites: true});
  }

  public logSurname() {
    effect(() => {
      const surname = this.surnames();
      console.log(surname, 'SURNAME')
    });
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
