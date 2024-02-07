import {forwardRef, Inject, Injectable} from "@angular/core";
import {LoggerService} from "./logger.service";

@Injectable({providedIn: 'root'})
export class AuthService  {
  private _userStatus = 'moderator';

  constructor() {
  }

  public userStatus() {
    return this._userStatus;
  }

}
