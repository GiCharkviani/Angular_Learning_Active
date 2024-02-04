import {Injectable} from "@angular/core";

@Injectable()
export class AuthService  {

  public userStatus() {
    return 'admin';
  }

}
