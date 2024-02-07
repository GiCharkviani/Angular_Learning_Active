import {Injectable} from "@angular/core";
import {LoggerService} from "./logger.service";

@Injectable({providedIn: 'root'})
export class AuthService  {
  private _userStatus = 'moderator';

  constructor(private loggerService: LoggerService) {
  }

  public userStatus() {
    return this._userStatus;
  }

}
