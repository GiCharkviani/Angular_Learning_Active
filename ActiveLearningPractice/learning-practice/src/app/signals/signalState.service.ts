import {computed, Injectable, signal} from "@angular/core";

@Injectable({providedIn: 'root'})
export class SignalStateService {
  /* Writable Signals */
  public names = signal('');

  /* Readable Signals */
  public namesAndSurnames = computed(() => {
    const localNames = this.names();
    return localNames + ' Chavchavadze';
  })

  public setNames(value: string) {
    this.names.set(value);
  }

  public updateNames(value: string) {
    this.names.update(oldValue => oldValue + ' - ' + value);
  }



}
