import {Injectable} from "@angular/core";

@Injectable()
export class BetterLoggerService  {


  public logWarm() {
    console.warn('Something happens bro')
  }

}
