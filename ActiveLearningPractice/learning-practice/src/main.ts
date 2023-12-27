import {enableProdMode, importProvidersFrom} from '@angular/core';
import { environment } from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {AppRouterModule} from "./app/app-router.module";
import {HttpClientModule} from "@angular/common/http";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [AppRouterModule.providers!, importProvidersFrom(HttpClientModule)]
})
  .catch(console.log)
