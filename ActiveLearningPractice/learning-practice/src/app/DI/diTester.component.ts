import {Component} from "@angular/core";
import {LoggerService} from "./logger.service";
import {BetterLoggerService} from "./betterLogger.service";


@Component({
  selector: 'app-diTester',
  standalone: true,
  imports: [],
  template: ``,
  styles: ``,
  providers: [
    {provide: LoggerService, useClass: BetterLoggerService}
  ]
})
export class DiTesterComponent {

 constructor(loggerService: LoggerService) {
   loggerService.log()
 }
}
