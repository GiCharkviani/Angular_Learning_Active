import {Component} from "@angular/core";
import {UserService} from "./user.service";


@Component({
  selector: 'app-diTester',
  standalone: true,
  imports: [],
  template: ``,
  styles: ``,
  providers: [
    // BetterLoggerService,
    // {provide: LoggerService, useClass: BetterLoggerService},
    // {provide: LoggerService, useExisting: BetterLoggerService},
    {
      provide: UserService,
      useFactory: () => {

      },
      deps: []
    }
  ]
})
export class DiTesterComponent {

 constructor(

 ) {

 }
}
