import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: AppComponent},
  {path: 'persons', loadChildren: () => import('./persons/persons.module').then(m => m.PersonsModule)},
  {path: 'countries', loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)},
  {path: '**', redirectTo: '/home'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {}
