import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginGuard } from "./authGuard/auth-guard-login.service";
import { AuthGuard } from "./authGuard/auth-guard.service";
import { RegistrationGuard } from "./authGuard/auth-gurad-registrate.service";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ChatComponent } from "./rooms/chat/chat.component";
import { LoginComponent } from "./users/login/login.component";
import { RegisterComponent } from "./users/register/register.component";


const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent, canActivate:[LoginGuard]},
  {path: 'registration', component: RegisterComponent, canActivate:[RegistrationGuard]},
  {path: 'chat', component: ChatComponent, canActivate:[AuthGuard]},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
