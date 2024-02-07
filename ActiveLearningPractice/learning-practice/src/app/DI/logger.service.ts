import {forwardRef, Inject, Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable({providedIn: 'root'})
export class LoggerService {

  constructor(@Inject(forwardRef(() => AuthService)) private authService: AuthService) {
  }

  public log() {
    console.log('LOGGER')
  }

}
