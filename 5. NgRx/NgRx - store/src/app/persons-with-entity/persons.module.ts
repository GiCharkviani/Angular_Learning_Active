import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsEntityComponent } from './persons/persons.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { PersonsReducerEntity } from './store/persons.reducer';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { PersonsEffects } from './store/persons.effects';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { EntityDataModule } from '@ngrx/data';

@NgModule({
  declarations: [
    PersonsEntityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: PersonsEntityComponent}]),
    StoreModule.forFeature('persons', PersonsReducerEntity),
    EffectsModule.forFeature([PersonsEffects]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    DragDropModule,
  ],
  exports: [RouterModule]
})
export class PersonsEntityModule { }
