import {Injectable} from "@angular/core";

@Injectable()
export class LoggerService {

  protected log() {
    console.log('LOGGER')
  }

}
