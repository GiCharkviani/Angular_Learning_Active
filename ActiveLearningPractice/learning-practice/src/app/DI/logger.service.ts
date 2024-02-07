import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable({providedIn: 'root'})
export class LoggerService {

  constructor(private authService: AuthService) {
  }

  public log() {
    console.log('LOGGER')
  }

}
