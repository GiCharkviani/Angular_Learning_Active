import {computed, Injectable, signal} from "@angular/core";


function equality(value1: string, value2: string): boolean {
  return value1 === value2;
}

const animal = equality

@Injectable({providedIn: 'root'})
export class SignalStateService {
  /* Writable Signals */
  public names = signal<string>('', {
    equal: equality
  });

  public surnames = signal('');

  constructor() {
    console.dir(animal, 'RAGAC')
  }

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
