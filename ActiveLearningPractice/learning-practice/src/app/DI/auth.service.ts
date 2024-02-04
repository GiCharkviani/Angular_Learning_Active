import {Injectable} from "@angular/core";

@Injectable()
export class AuthService  {
  private _userStatus = 'admin'

  public userStatus() {
    return this._userStatus;
  }

}
