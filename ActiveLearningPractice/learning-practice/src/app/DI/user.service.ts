import {BetterLoggerService} from "./betterLogger.service";
import {Injectable} from "@angular/core";


@Injectable()
export abstract class UserService {

  constructor(private logger: BetterLoggerService) {
  }

  public log() {
    this.logger.log();
  }

  public abstract getName(): void;

}
