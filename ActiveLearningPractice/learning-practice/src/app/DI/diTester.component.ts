import {Component} from "@angular/core";
import {UserService} from "./user.service";
import {LoggerService} from "./logger.service";
import {AuthService} from "./auth.service";
import {ModeratorService} from "./moderator.service";
import {BetterLoggerService} from "./betterLogger.service";
import {AdminService} from "./admin.service";


@Component({
  selector: 'app-diTester',
  standalone: true,
  imports: [],
  template: ``,
  styles: ``,
  providers: [
    // {provide: LoggerService, useClass: BetterLoggerService},

    // BetterLoggerService,
    // {provide: LoggerService, useExisting: BetterLoggerService},

    BetterLoggerService,
    AuthService,
    {
      provide: UserService,
      useFactory: (logger: BetterLoggerService, auth: AuthService) => {
        if(auth.userStatus() === 'moderator') {
          return new ModeratorService(logger);
        }
        return new AdminService(logger);
      },
      deps: [BetterLoggerService, AuthService]
    }
  ]
})
export class DiTesterComponent {

 constructor(
  private userService: UserService
 ) {
   this.userService.getName();
   this.userService.log();
 }
}
