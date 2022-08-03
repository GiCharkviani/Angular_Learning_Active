import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { CountriesReducer } from './store/country.reducer';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { CountryEffects } from './store/country.effects';
import { CityComponent } from './countries/city/city.component';


const routes: Routes = [
  {path: '', component: CountriesComponent, children: [
    {path: ':city', component: CityComponent}
  ]}
]


@NgModule({
  declarations: [
    CountriesComponent,
    CityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('countries', CountriesReducer),
    EffectsModule.forFeature([CountryEffects]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class CountriesModule { }
