import {Injectable} from "@angular/core";
import {LoggerService} from "./logger.service";

@Injectable()
export class BetterLoggerService extends LoggerService {

  public override log() {
    console.log('BETTER LOGGER')
  }

}
