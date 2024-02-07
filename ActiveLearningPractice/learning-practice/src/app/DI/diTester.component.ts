import {
  Component,
} from "@angular/core";
import {DiChildComponent} from "./diChild.component";
import {ContentComponent} from "./content.component";
import {AppConfig} from "./injectionTokens";


/* Injection Token */

const otherConfig: AppConfig = {
  theme: 'light',
  language: 'ru'
}



/* View Providers */
const myValue = {
  userStatus() {
    return 'value status';
  }
}

@Component({
  selector: 'app-diTester',
  standalone: true,
  imports: [
    DiChildComponent
  ],
  template: `

    <app-diChild>
<!--      <app-contentComponent></app-contentComponent>-->
    </app-diChild>

  `,
  styles: ``,
  providers: [
    /* View Providers */

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

    /* Injection Token */
    // {
    //   provide: OTHER_CONFIG,
    //   useValue: otherConfig
    // }

    /* Resolution Modifiers */
    // AuthService,
    // BetterLoggerService,

    // { provide: FLOWER, useValue: {emojy: '🌻'} }
  ]
})
export class DiTesterComponent {
  // private readonly environmentInjector = inject(EnvironmentInjector);

  constructor(
    /* Injection Token */
    // @Inject(APP_CONFIG) private appConfig: AppConfig,
    // @Inject(OTHER_CONFIG) private otherConfig: AppConfig

    /* Resolution Modifiers */
    // @Optional() private userService: UserService
  ) {

  }

  public doSMth() {
    // runInInjectionContext(this.environmentInjector, () => {
    //   const service = inject(ModeratorService);
    //   service.getName();
    // })


  }
}
