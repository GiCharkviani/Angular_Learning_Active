import {Injectable} from "@angular/core";

@Injectable()
export class LoggerService {

  public log() {
    console.log('LOGGER')
  }

}
