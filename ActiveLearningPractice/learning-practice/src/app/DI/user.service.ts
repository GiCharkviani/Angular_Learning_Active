import {BetterLoggerService} from "./betterLogger.service";


export abstract class UserService {

  constructor(private logger: BetterLoggerService) {
  }

  public log() {
    this.logger.log();
  }

  public abstract getName(): void;

}
