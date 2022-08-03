import { Update } from "@ngrx/entity"
import { createAction, props } from "@ngrx/store"
import { PersonModel } from "../person.model"


//loading
export const startLoadingPersons = createAction(
  '[Persons] Start Loading Persons'
)
export const successLoadingPersons = createAction(
  '[Persons] Loaded Persons',
  props<{persons: PersonModel[]}>()
)
export const failedLoadingPersons = createAction(
  '[Persons] Failed Loading Persons',
  props<{error: string}>()
)

//add person
export const startAddingPerson = createAction(
  '[Persons] Start Adding Person',
  props<{person: PersonModel}>()
)
export const successAddingPerson = createAction(
  '[Persons] Added Person',
  props<{person: PersonModel}>()
)
export const failedAddingPerson = createAction(
  '[Persons] Failed Adding Person',
  props<{error: string}>()
)


//select person
export const selectPerson = createAction(
  '[Persons] Select Person',
  props<{person: PersonModel}>()
)

//update person
export const startUpdatingPerson = createAction(
  '[Persons] Start updating Person',
  props<{person: PersonModel}>()
)
export const successUpdatingPerson = createAction(
  '[Persons] Updated Person',
  props<{person:  Update<PersonModel>}>()
)
export const failedUpdatingPerson = createAction(
  '[Persons] Failed updating Person',
  props<{error: string}>()
)

//delete person
export const startDeletingPerson = createAction(
  '[Persons] Start deleting Person',
  props<{id: string}>()
)
export const successDeletingPerson = createAction(
  '[Persons] Deleted Person',
  props<{id: string}>()
)
export const failedDeletingPerson = createAction(
  '[Persons] Failed deleting Person',
  props<{error: string}>()
)
