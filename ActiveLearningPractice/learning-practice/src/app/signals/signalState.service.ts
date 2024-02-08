import {Injectable, signal} from "@angular/core";

@Injectable({providedIn: 'root'})
export class SignalStateService {
  /* Writable Signals */
  public names = signal('');

  public updateNames(value: string) {
    this.names.set(value);
  }

}
