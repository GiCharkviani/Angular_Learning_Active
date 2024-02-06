import {Component, Host, Optional, Self, SkipSelf} from "@angular/core";
import {AuthService} from "./auth.service";
import {LoggerService} from "./logger.service";


@Component({
  selector: 'app-diChild',
  standalone: true,
  imports: [],
  template: `
        <p>I am child DI</p>
        <ng-content></ng-content>
  `,
  styles: ``,
  providers: [
    LoggerService
  ]
})
export class DiChildComponent {
  constructor(@Self() @Optional() private authService: AuthService,
              @SkipSelf() @Optional() private loggerService: LoggerService,
               // @Host() private betterLogger: BetterLoggerService
              ) {
    console.log(this.authService?.userStatus());
    this.loggerService?.log();
    // this.betterLogger?.logWarm();
  }
}
