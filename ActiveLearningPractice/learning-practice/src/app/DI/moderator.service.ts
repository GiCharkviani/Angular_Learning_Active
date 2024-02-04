import {Injectable} from "@angular/core";
import {UserService} from "./user.service";

@Injectable()
export class ModeratorService extends UserService {

  override getName() {
    console.log('moderator name')
  }

}