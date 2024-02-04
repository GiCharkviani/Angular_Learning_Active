import {Component, Inject, InjectionToken} from "@angular/core";


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
  imports: [],
  template: ``,
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
    {
      provide: OTHER_CONFIG,
      useValue: otherConfig
    }

  ]
})
export class DiTesterComponent {

  constructor(
    @Inject(APP_CONFIG) private appConfig: AppConfig,
    @Inject(OTHER_CONFIG) private otherConfig: AppConfig
  ) {
    console.log(this.appConfig, 'CONFIG');
    console.log(this.otherConfig, 'OTHER_CONFIG')
  }
}
