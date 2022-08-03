import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { CountryModel } from "../country.model";


@Injectable({providedIn: 'root'})

export class CountryService extends EntityCollectionServiceBase<CountryModel> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory){
    super('Country', serviceElementsFactory)
  }
}
