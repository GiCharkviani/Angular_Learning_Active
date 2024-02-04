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
    BetterLoggerService,
    // {provide: LoggerService, useClass: BetterLoggerService},
    {provide: LoggerService, useExisting: BetterLoggerService}
  ]
})
export class DiTesterComponent {

 constructor(
   @Inject(LoggerService) private loggerService: LoggerService,
   @Inject(BetterLoggerService) private betterLoggerService: BetterLoggerService,

   // private loggerService: LoggerService
 ) {
   console.log(this.loggerService === this.betterLoggerService, 'DO_EQUAL')

   this.betterLoggerService.log();
   this.loggerService.log();
 }
}
