import {Injectable} from "@angular/core";
import {BetterLoggerService} from "./betterLogger.service";

@Injectable()
export class UserService {

  constructor(private logger: BetterLoggerService) {
  }

  public log() {
    this.logger.log();
  }

  public getName() {
    console.log('user name')
  }

}
