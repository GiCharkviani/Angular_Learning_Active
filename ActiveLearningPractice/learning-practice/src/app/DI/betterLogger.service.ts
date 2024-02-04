import {Injectable} from "@angular/core";
import {LoggerService} from "./logger.service";

@Injectable({providedIn: 'root'})
export class BetterLoggerService extends LoggerService {

  override log() {
    console.log('BETTER LOGGER')
  }

  public logWarm() {
    console.warn('Something happens bro')
  }

}
