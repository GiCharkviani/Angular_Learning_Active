import {
  Component, Inject,
  InjectionToken, Optional,
} from "@angular/core";
import {UserService} from "./user.service";
import {DiChildComponent} from "./diChild.component";
import {AuthService} from "./auth.service";
import {BetterLoggerService} from "./betterLogger.service";


/* Injection Token */
interface AppConfig {
  theme: string;
  language: string;
}

const config: AppConfig = {
  theme: 'dark',
  language: 'en'
}

const otherConfig: AppConfig = {
  theme: 'light',
  language: 'ru'
}

const OTHER_CONFIG = new InjectionToken<AppConfig>('other.app.config');

const APP_CONFIG = new InjectionToken<AppConfig>(
  'app.config',
  {
    providedIn: 'root',
    factory: () => config
  }
);

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
    <button (click)="doSMth()">DO Smth</button>
    <app-diChild></app-diChild>
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
    AuthService,
    BetterLoggerService
  ]
})
export class DiTesterComponent {
  // private readonly environmentInjector = inject(EnvironmentInjector);

  constructor(
    /* Injection Token */
    // @Inject(APP_CONFIG) private appConfig: AppConfig,
    // @Inject(OTHER_CONFIG) private otherConfig: AppConfig

    /* Resolution Modifiers */
    @Optional() private userService: UserService
  ) {

  }

  public doSMth() {
    // runInInjectionContext(this.environmentInjector, () => {
    //   const service = inject(ModeratorService);
    //   service.getName();
    // })


  }
}
