import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainListComponent } from './main-list/main-list.component';
import { SideListComponent } from './side-list/side-list.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MainListEffects } from './main-list/store/main-list.effects';
import { SideListEffects } from './side-list/store/side-list.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainListComponent,
    SideListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([MainListEffects, SideListEffects]),
    StoreDevtoolsModule.instrument({logOnly: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
