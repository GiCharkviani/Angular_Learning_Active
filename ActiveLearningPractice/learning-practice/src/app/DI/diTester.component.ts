import {Component} from "@angular/core";

const myValue = {
  userStatus() {
    return 'value status';
  }
}

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

  //   BetterLoggerService,
  //   AuthService,
  //   {
  //     provide: UserService,
  //     useFactory: (logger: BetterLoggerService, auth: AuthService) => {
  //       if(auth.userStatus() === 'moderator') {
  //         return new ModeratorService(logger);
  //       }
  //       return new AdminService(logger);
  //     },
  //     deps: [BetterLoggerService, AuthService]
  //   }

    // {provide: AuthService, useValue: myValue}
  ]
})
export class DiTesterComponent {

 constructor(
 ) {
 }
}
