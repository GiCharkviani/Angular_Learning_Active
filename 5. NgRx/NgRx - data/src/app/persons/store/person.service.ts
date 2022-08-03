import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { PersonModel } from "../person.model";

@Injectable({providedIn: 'root'})

export class PersonService extends EntityCollectionServiceBase<PersonModel> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory){
    super('Person', serviceElementsFactory)
  }
}
