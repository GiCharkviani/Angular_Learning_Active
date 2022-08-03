import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { ChatComponent } from './rooms/chat/chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatItemComponent } from './rooms/chat/chat-item/chat-item.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CurrentUserDirective } from './shared/current-user.directive';
import { LikeCheckDirective } from './shared/like-check.directive';
import { UsersListComponent } from './rooms/chat/users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    ChatComponent,
    ChatItemComponent,
    RegisterComponent,
    LoginComponent,
    NotFoundComponent,
    CurrentUserDirective,
    LikeCheckDirective,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
