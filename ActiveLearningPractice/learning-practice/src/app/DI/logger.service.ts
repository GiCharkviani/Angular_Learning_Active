import {Injectable} from "@angular/core";
import {LightWeightTokenService} from "./diChild.component";

@Injectable()
export class LoggerService extends LightWeightTokenService {

  public log() {
    console.log('LOGGER')
  }

}
