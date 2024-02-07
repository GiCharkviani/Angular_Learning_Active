import {forwardRef, Inject, Injectable} from "@angular/core";
import {LoggerService} from "./logger.service";

@Injectable({providedIn: 'root'})
export class AuthService  {
  private _userStatus = 'moderator';

  constructor(@Inject(forwardRef(() => LoggerService)) private loggerService: LoggerService) {
  }

  public userStatus() {
    return this._userStatus;
  }

}
