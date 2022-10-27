
// Background Proccess of DI

class Component {
    constructor(public user: UserService){}
}

class UserService {
    sayHi() {
        console.log('sayhi');
    }
}

class  Injector {
    private _container = new Map();

    constructor(private _providers: any[] = []) {
        this._providers.forEach(service => {
                console.log(service, new service);
                this._container.set(service, new service())
        });
    }

    get(service: any) {
        const serviceInstance = this._container.get(service);
        if(!service) throw Error('No provider');
        return serviceInstance;
    }
}


const injector = new Injector([UserService]);
const component = new Component(injector.get(UserService));
component.user.sayHi();


//  Resolution Modifiers @Optional(),@Self(),@SkipSelf(),@Host();
    
    /**
     * Optional დეკორატორი თუ სერვისი არ არის პროვაიდერში
     * დარეგისტრირებული ინიციალიზაციის დროს ნულლ ინჯექტორი ერრორის მაგივრად აბრუნებს ნულს და აპლიკაცია არ იქრაშება.
     */
    // constructor(@Optional() public user: UserService);


    /**
     * Self დეკორატორი თუ სერვისი არ არის კონკრეტულად ამ კომპონენტის პროვაიდერებში დარეგისტრირებული ინიციალიზაციის დროს
     * ისვრის ერორს და არ ადის უფრო მაღალ მოდულზე ან კომპონენტზე ინჯექშენ თრიში.
     */
    // constructor(@Self() public user: UserService);

    /**
     * SkipSelf დეკორატორი გამოტოვებს საკუთარ თავს injection treeshi და ინჯექშენ თრის რეკურსია გრძელდება ჩვეულებრივ.
     */
    // constructor(@SkipSelf() public user: UserService);

    /**
     * Host დეკორატორი ძირითადად გამოიყნება დირექტივებში, შვილი დირექტივა თუ გამოძახებულია მშობელის მიერ და მას არ აქვს პროვაიდერებში 
     * დარეგისტრირებული სერვისი რომელსაც იყენებს შვილი მაშინ ერორზე გავა.
     */
    // constructor(@Host() public user: UserService);



// DI in Depth (Angular): View Providers

    /**
     * UseClass იმ სერვისის ნაცვლად რომელიც გამოძახებულია კონსტრუქტორში, შექმნის მითითებული სერვისის ინსტანსს.
     * (კონსტრუქტორში თუ შემოვიტანთ მითითებულ ინსტანსს იქნება ორი განსხვავებული სტეიტი).
     * ორივე მაგალითი მოგვიტანს იგივე შედეგს თუ ჩაილდში არ ხდება გადაწერა.
     * 
     * example 1( Componentshi ): 
     *  providers: [{
     *      provide: loggerService, // გამოძახებული სერვისი კონსტრუკტორში // 
     *      useClass:  experimentalService, // ნაცვლად loggerServicesa გამოიყენებს experimnetalservic ინსტანს
     *  }]
     * example 2 ( Servicshi ):
     *  class loggerService 
     *  @Injectable({
     *      providedIn: 'root',
     *      useClass: experimentalService
     *  })
     * 
     * ///////////////////////////////////////////////////////////////////////////////////////////////////
     *  
     * UseExisting იგივეს გააკეთებს რაც UseClass, თუმცა თუ კონტრუქტორში შემოვიტანთ მითითებულ სერვისს ის გამოიყენებს არსებულ ინსტანს. Useclass - ის გან 
     * განსხვავებით. 
     * 
     * example 1( Componentshi ): 
     *  providers: [{
     *      provide: loggerService, // გამოძახებული სერვისი კონსტრუკტორში // 
     *      UseExisting:  experimentalService, // ნაცვლად loggerServicesa გამოიყენებს experimnetalservic ინსტანს
     *  }]
     * example 2 ( Servicshi ):
     *  class loggerService 
     *  @Injectable({
     *      providedIn: 'root',
     *      UseExisting: experimentalService
     *  })
     * 
     *  ///////////////////////////////////////////////////////////////////////////////////////////////////
     *  
     *  UseValue თუკი გვინდა გამოვიყენოთ Object literali კლასის ნაცვლად, რადგან ინჯექტ პროცესი მოიცავს new keyword-ის გამოყენებას და ობჯექტს არ აქვს ის.
     * 
     * example 1( Componentshi ): 
     *  providers: [{
     *      provide: loggerService, // გამოძახებული სერვისი კონსტრუკტორში // 
     *      UseValue:  experimentalService, // ნაცვლად loggerServicesa გამოიყენებს experimnetalservic ინსტანს
     *  }]
     * example 2 ( Servicshi ):
     *  class loggerService 
     *  @Injectable({
     *      providedIn: 'root',
     *      UseValue: experimentalService
     *  })
     */


    /**
     * InjectionToken()
     * 
     * 
     * Config Token 
     * 
     * import { InjectionToken } from '@angular/core';
     * 
     * export interface AppConfig {
     *  experimentalEnabled: boolean;
     * } 
     * 
     * export const APP_CONFIG = new InjectionToken<AppConfig>('app.config', {
     *  providedIn: 'root,
     *  factory: () => ({
     *     experimentalEnabled: true;
     *  }) 
     * })
     * 
     * ინჯექტი
     * 
     * constructor(@Inject(APP_CONFIG) private config: AppConfig)
     * 
     * 
     * 
     *      ^^
     *      ||
     *      ||
     *      ||
     *      ||
     * // UseFactory
     * 
     * providers: [{
     *  provide: loggerService,
     *  useFactory: (config: AppConfig,http: HttpClient) => {
     *      return config.exprimentalEnabled ? new ExperimentalLoggerService(http) : new loggerService
     *  },
     *  deps: [APP_CONFIG, HttpClient] 
     *  }]
     * 
     * // UseFactory (better solution with function)
     * 
     * export function loggerFactory(injector: Injector): ExperimentalLoggerService | loggerService {
     *      return injector.get(APP_CONFIG).exprimentalEnabled ? injector.get(ExperimentalLoggerService): injector.get(loggerService);
     * }
     * 
     * providers: [{
     *  provide: loggerService,
     *  useFactory: loggerFactory,
     *  deps: [Injector]
     * }]
     * 
     * 
     * 
     * 
     * Multi: true თუ falsea აიღებს უკანასკნელ პროვაიდერს
     * 
     * providers: [{
     *  provide: loggerService,
     *  useFactory: loggerFactory,
     *  deps: [Injector],
     *  multi: true,
     * },
     * {
     *  provide: loggerService,
     *  useValue: legacyLogger // object literal,
     *  multi: true,
     * }]
     */

