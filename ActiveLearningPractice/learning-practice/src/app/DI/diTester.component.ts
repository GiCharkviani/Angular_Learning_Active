import {Component, Inject} from "@angular/core";
import {LoggerService} from "./logger.service";
import {BetterLoggerService} from "./betterLogger.service";


@Component({
  selector: 'app-diTester',
  standalone: true,
  imports: [],
  template: ``,
  styles: ``,
  providers: [
    // {provide: LoggerService, useClass: BetterLoggerService},
    {provide: }
  ]
})
export class DiTesterComponent {

 constructor(
   @Inject(LoggerService) private loggerService: LoggerService,
   // private loggerService: LoggerService
 ) {
   loggerService.log()
 }
}
