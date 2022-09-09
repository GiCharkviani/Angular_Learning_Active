import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path:'home', component: AppComponent},
  {path:'login', component: LoginComponent}
]

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
