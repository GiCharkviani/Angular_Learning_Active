import {mergeApplicationConfig, ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideServerRendering} from '@angular/platform-server';
import {HttpClientModule, withFetch} from "@angular/common/http";
import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding, withDebugTracing,
  withHashLocation,
  withPreloading
} from "@angular/router";
import {routes} from "./app-router.module";
import {provideClientHydration} from "@angular/platform-browser";

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

export const config = mergeApplicationConfig(
  {
    providers: [
      importProvidersFrom(HttpClientModule),
      provideRouter(routes, withComponentInputBinding(), withHashLocation()),
      provideClientHydration(),
      withFetch(),
    ]
  } as ApplicationConfig, serverConfig);
