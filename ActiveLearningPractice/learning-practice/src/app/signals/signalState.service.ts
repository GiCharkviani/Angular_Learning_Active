import {computed, Injectable, signal} from "@angular/core";


function equality(value: any) {
  console.log(value, 'FROM_EQUAL')
}

@Injectable({providedIn: 'root'})
export class SignalStateService {
  /* Writable Signals */
  public names = signal('', {
    equal:
  });

  public surnames = signal('');

  /* Readable Signals */
  public namesAndSurnames = computed(() => {
    const localNames = this.names();
    const localSurname = this.surnames();
    return localNames + ' ' + localSurname;
  })

  public setNames(value: string) {
    this.names.set(value);
  }

  public setSurnames(value: string) {
    this.surnames.set(value);
  }

  public updateNames(value: string) {
    this.names.update(oldValue => oldValue + ' - ' + value);
  }



}
