import {Injectable} from "@angular/core";

@Injectable()
export class AuthService  {
  private _userStatus = 'moderator'

  public userStatus() {
    return this._userStatus;
  }

}
