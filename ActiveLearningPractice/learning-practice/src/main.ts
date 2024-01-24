import {enableProdMode, importProvidersFrom} from '@angular/core';
import { environment } from './environments/environment';
import {bootstrapApplication, provideClientHydration} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {routes} from "./app/app-router.module";
import {HttpClientModule} from "@angular/common/http";
import { provideRouter, withComponentInputBinding} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import { provideAnimations } from '@angular/platform-browser/animations';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom(HttpClientModule, NgOptimizedImage), provideClientHydration(),
    provideAnimations()
],
})
  .catch(console.log)
