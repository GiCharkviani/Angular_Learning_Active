import {AfterContentInit, Component, ContentChild, Inject, Optional, Self, SkipSelf} from "@angular/core";
import {AuthService} from "./auth.service";
import {LoggerService} from "./logger.service";
import {FLOWER} from "./injectionTokens";
import {ContentComponent} from "./content.component";


@Component({
  selector: 'app-diChild',
  standalone: true,
  imports: [],
  template: `
        <p>I am child DI: {{flower.emojy}}</p>
        <ng-content></ng-content>
  `,
  styles: ``,
  providers: [
    LoggerService
  ],
  viewProviders: [
    { provide: FLOWER, useValue: {emojy: '🌺'} }
  ]
})
export class DiChildComponent implements AfterContentInit {
  @ContentChild(ContentComponent) contentComponent: ContentComponent | null = null;

  ngAfterContentInit() {
    console.log(this.contentComponent, 'CONTENT_COMPONENT')
  }

  constructor(@Self() @Optional() private authService: AuthService,
              @SkipSelf() @Optional() private loggerService: LoggerService,
               // @Host() private betterLogger: BetterLoggerService
              @Inject(FLOWER) public flower: {emojy: string}
              ) {
    console.log(this.authService?.userStatus());
    this.loggerService?.log();
    // this.betterLogger?.logWarm();
  }
}
