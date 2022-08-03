import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { createAction } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { PersonModel } from 'src/app/persons/person.model';
import { PersonsHttpService } from '../persons.service';
import * as PersonsActions from './persons.actions';

@Injectable()
export class PersonsEffects {
  constructor(
    private actions$: Actions,
    private personsHttp: PersonsHttpService
  ) {}

  getPersons$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PersonsActions.startLoadingPersons),
      mergeMap(() => {
        return this.personsHttp.getPersons().pipe(
          map((persons) => {
            return PersonsActions.successLoadingPersons({ persons });
          }),
          catchError((err) => {
            return of(
              PersonsActions.failedLoadingPersons({ error: err.message })
            );
          })
        );
      })
    );
  });

  addPerson$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PersonsActions.startAddingPerson),
      exhaustMap((person) => {
        return this.personsHttp.addPerson(person.person).pipe(
          map((addedPerson) => {
            return PersonsActions.successAddingPerson({ person: addedPerson });
          }),
          catchError((error) => {
            return of(
              PersonsActions.failedAddingPerson({ error: error.message })
            );
          })
        );
      })
    );
  });

  updatePerson$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PersonsActions.startUpdatingPerson),
      exhaustMap((person) => {
        return this.personsHttp.updatePerson(person.person).pipe(
          map((data) => {
            const updatePerson: Update<PersonModel> = {
              id: person.person._id,
              changes: {
                ...person.person
              }
            }
            return PersonsActions.successUpdatingPerson({
              person: updatePerson,
            });
          }),
          catchError((err) => {
            return of(
              PersonsActions.failedUpdatingPerson({ error: err.message })
            );
          })
        );
      })
    );
  });


  deletePerson$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(PersonsActions.startDeletingPerson),
      exhaustMap(personId => {
        return this.personsHttp.deletePerson(personId.id).pipe(
          map(deletedPerson => {
            return PersonsActions.successDeletingPerson({id: deletedPerson._id})
          }),
          catchError(err => {
            return of(PersonsActions.failedDeletingPerson({error: err.message}))
          })
        )
      })
    )
  })

}
