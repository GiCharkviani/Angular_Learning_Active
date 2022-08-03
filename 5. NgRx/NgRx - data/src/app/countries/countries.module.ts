import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { CountryModel } from './country.model';
import { CountryDataService } from './store/country-default.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CountriesResolver } from './countries.resolver';

const routes: Routes = [{ path: '', component: CountriesComponent, resolve: { countries: CountriesResolver} }];

const entityMetadata: EntityMetadataMap = {
  Country: {
    selectId: (country: CountryModel) => country._id,
    entityDispatcherOptions: {optimisticUpdate: true}
  },
};

@NgModule({
  declarations: [CountriesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [CountryDataService, CountriesResolver],
  exports: [RouterModule],
})
export class CountriesModule {
  constructor(
    eds: EntityDefinitionService,
    entityDataService: EntityDataService,
    countryDataService: CountryDataService
  ) {
    eds.registerMetadataMap(entityMetadata);
    entityDataService.registerService('Country', countryDataService);
  }
}
