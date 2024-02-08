import {ChangeDetectionStrategy, Component, effect, Injector, Signal, untracked, WritableSignal} from "@angular/core";
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
      <br>
      <button (click)="nameAndSurnameEffect.destroy()">Destroy Effect</button>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsTesterComponent {
  public names!: WritableSignal<string>;
  public namesAndSurnames!: Signal<string>;
  public surnames!: WritableSignal<string>;

  public nameAndSurnameEffect = effect(() => {
    const nameAndSurname = this.namesAndSurnames();
    // console.log(nameAndSurname, 'NAME_AND_SURNAME');

    setTimeout(() => {
      console.log(nameAndSurname, 'FROM_INTERVAL')
    }, 1000)

  })

  constructor(private signalStateService: SignalStateService, private injector: Injector) {
    this.names = this.signalStateService.names;
    this.namesAndSurnames = this.signalStateService.namesAndSurnames;
    this.surnames = this.signalStateService.surnames;


    /* Effects */
    effect( () => {
      const name = this.names();
      // remove this.surnames as a dependency
      const surname = untracked(this.surnames);
      // console.log(`Name is - ${name} and surname is - ${surname}`)
    }, {allowSignalWrites: true});
  }

  public logSurname() {
    effect(() => {
      const names = this.names();
      // this.names.set('dsada') // ar qna
      console.log(names, 'NAMES');
    }, {injector: this.injector});
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
