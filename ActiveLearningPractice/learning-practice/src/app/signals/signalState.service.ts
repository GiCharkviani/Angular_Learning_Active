import {Injectable, signal} from "@angular/core";

@Injectable({providedIn: 'root'})
export class SignalStateService {
  /* Writable Signals */
  public names = signal('');

  public setNames(value: string) {
    this.names.set(value);
  }

  public updateNames(value: string) {
    this.names.update(oldValue => oldValue + ' - ' + value);
  }



}
