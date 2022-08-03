import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsComponent } from './persons/persons.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { PersonModel } from './person.model';
import { PersonDefaultService } from './store/person-default.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PersonsResolver } from './persons.resolver';

const entityMetadata: EntityMetadataMap = {
  Person: {
    selectId: (person: PersonModel) => person._id,
    entityDispatcherOptions: {optimisticUpdate: true}
  },

};

@NgModule({
  declarations: [PersonsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PersonsComponent, resolve: { persons: PersonsResolver} }]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    DragDropModule,
    MatProgressSpinnerModule
  ],
  providers:[PersonDefaultService, PersonsResolver],
  exports: [RouterModule],
})
export class PersonsModule {
  constructor(eds: EntityDefinitionService, entityDataService: EntityDataService, personDefaultService: PersonDefaultService) {
    eds.registerMetadataMap(entityMetadata)
    entityDataService.registerService('Person', personDefaultService)
  }
}
