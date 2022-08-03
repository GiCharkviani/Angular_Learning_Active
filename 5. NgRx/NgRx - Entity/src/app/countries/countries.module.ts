import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CountriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: CountriesComponent}])
  ],
  exports: [RouterModule]
})
export class CountriesModule { }
