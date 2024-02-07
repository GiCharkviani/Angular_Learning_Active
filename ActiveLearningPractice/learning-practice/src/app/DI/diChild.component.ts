import {AfterContentInit, Component, ContentChild, ElementRef, Inject, Optional} from "@angular/core";
import {FLOWER} from "./injectionTokens";
import {ContentComponent} from "./content.component";
import {LoggerService} from "./logger.service";


@Component({
  selector: 'app-diChild',
  standalone: true,
  imports: [],
  template: `
    <p>I am child DI </p>
    <ng-content></ng-content>
  `,
  styles: ``,
  providers: [

  ],
  viewProviders: [
    {provide: FLOWER, useValue: {emojy: '🌺'}}
  ]
})
export class DiChildComponent implements AfterContentInit {
  @ContentChild(ContentComponent, {read: ElementRef}) contentComponent: ContentComponent | null = null;

  ngAfterContentInit() {
    console.log(this.contentComponent, 'CONTENT_COMPONENT')
  }

  constructor(
    // @Self() @Optional() private authService: AuthService,
    // @SkipSelf() @Optional() private loggerService: LoggerService,
    // @Host() private betterLogger: BetterLoggerService
    // @Inject(FLOWER) public flower: { emojy: string },
    @Optional() @Inject(LoggerService) private loggerService: LoggerService
  ) {
    // console.log(this.authService?.userStatus());
    // this.loggerService?.log();
    // this.betterLogger?.logWarm();
  }
}
