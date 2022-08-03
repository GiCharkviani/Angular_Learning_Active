import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsComponent } from './persons/persons.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PersonsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: PersonsComponent}])
  ],
  exports: [RouterModule]
})
export class PersonsModule { }
