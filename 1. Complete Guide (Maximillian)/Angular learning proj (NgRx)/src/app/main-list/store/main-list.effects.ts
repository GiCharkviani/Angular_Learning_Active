import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, withLatestFrom, map } from 'rxjs/operators';
import * as appReducer from '../../app.reducer';
import { ItemModel } from '../item.model';
import * as MainListActions from './main-list.actions';

@Injectable()
export class MainListEffects {
  @Effect()
  fetchItems = this.actions$.pipe(
    ofType(MainListActions.FETCH_ITEMS),
    switchMap(() => {
      return this.http.get<ItemModel[]>(
        'https://httprequeststudy-default-rtdb.firebaseio.com/mainList.json'
      );
    }),
    map((mainListItems) => {
      return mainListItems.map((mainListItem) => {
        return {
          ...mainListItem,
          mainList: mainListItem ? mainListItem : [],
        };
      });
    }),
    map((mainListItems) => {
      return new MainListActions.SetItems(mainListItems);
    })
  );

  @Effect({ dispatch: false })
  storeMainList = this.actions$.pipe(
    ofType(MainListActions.STORE_ITEMS),
    withLatestFrom(this.store.select('mainList')),
    switchMap(([actionData, mainListState]) => {
      return this.http.put(
        'https://httprequeststudy-default-rtdb.firebaseio.com/mainList.json',
        mainListState.mainList
      );
    })
  );

  constructor(
    private store: Store<appReducer.AppState>,
    private http: HttpClient,
    private actions$: Actions
  ) {}
}
