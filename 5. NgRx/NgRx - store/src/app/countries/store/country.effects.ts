import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CountryHttpService } from '../country-http.service';
import {
  catchError,
  exhaustMap,
  map,
  mergeMap,
  switchMap,
} from 'rxjs/operators';
import * as CountryActions from './country.actions';
import { of } from 'rxjs';

@Injectable()
export class CountryEffects {
  constructor(
    private actions$: Actions,
    private countryHttpService: CountryHttpService
  ) {}

  loadCountries$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CountryActions.StartedLoadingCountries),
      mergeMap(() =>
        this.countryHttpService.getCountries().pipe(
          map((countries) => {
            return CountryActions.SuccessLoadingCountries({ countries });
          }),
          catchError((error) => {
            return of(
              CountryActions.FailedLoadingCountries({ error: error.message })
            );
          })
        )
      )
    );
  });

  addCountry$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CountryActions.StartedAddingCountry),
      exhaustMap((action) => {
        return this.countryHttpService.postCountry(action.country).pipe(
          map((country) => {
            return CountryActions.SuccessAddingCountry({ country });
          }),
          catchError((error) => {
            return of(
              CountryActions.FailedaddingCountry({ error: error.message })
            );
          })
        );
      })
    );
  });

  deletingCountry$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CountryActions.StartedDeletingCountry),
      exhaustMap((id) => {
        return this.countryHttpService.deleteCountry(id.countryId).pipe(
          map((delId) => {
            return CountryActions.SuccessDeletingCountry({ countryId: delId });
          }),
          catchError((error) => {
            return of(
              CountryActions.FailedDeletingCountry({ error: error.message })
            );
          })
        );
      })
    );
  });

  editingCountry$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CountryActions.StartedEditingCountry),
      exhaustMap((country) => {
        return this.countryHttpService
          .editCountry(country.country)
          .pipe(
            map((editedCountry) => {
              return CountryActions.SuccessEditingCountry({
                country: editedCountry,
              });
            }),
            catchError((error) => {
              return of(
                CountryActions.FailedEditingCountry({ error: error.message })
              );
            })
          );
      })
    );
  });
}
