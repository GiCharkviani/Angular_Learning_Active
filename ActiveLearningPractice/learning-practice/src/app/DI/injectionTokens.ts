import {InjectionToken} from "@angular/core";

const config: AppConfig = {
  theme: 'dark',
  language: 'en'
}

export interface AppConfig {
  theme: string;
  language: string;
}

export const FLOWER = new InjectionToken('flower')
export const ANIMAL = new InjectionToken('animal')

const OTHER_CONFIG = new InjectionToken<AppConfig>('other.app.config');

const APP_CONFIG = new InjectionToken<AppConfig>(
  'app.config',
  {
    providedIn: 'root',
    factory: () => config
  }
);
