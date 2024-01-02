import {enableProdMode, importProvidersFrom} from '@angular/core';
import { environment } from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {routes} from "./app/app-router.module";
import {HttpClientModule} from "@angular/common/http";
import { provideRouter, withComponentInputBinding} from "@angular/router";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom(HttpClientModule)
  ],
})
  .catch(console.log)
