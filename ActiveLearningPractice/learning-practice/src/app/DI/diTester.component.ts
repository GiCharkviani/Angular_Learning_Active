import {Component} from "@angular/core";
import {UserService} from "./user.service";
import {LoggerService} from "./logger.service";
import {AuthService} from "./auth.service";


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

    LoggerService,
    AuthService,
    {
      provide: UserService,
      useFactory: (logger: LoggerService, auth: AuthService) => {
        logger.log()
        console.log(auth.userStatus())
      },
      deps: [LoggerService, AuthService]
    }
  ]
})
export class DiTesterComponent {

 constructor(
  private userService: UserService
 ) {

 }
}
