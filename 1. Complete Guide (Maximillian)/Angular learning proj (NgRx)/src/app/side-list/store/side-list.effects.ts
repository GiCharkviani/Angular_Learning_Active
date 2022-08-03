import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, switchMap, withLatestFrom } from "rxjs/operators";
import * as appReducer from '../../app.reducer'
import { SideItemModel } from "../sideItem.model";
import * as sideListActions from './side-list.actions'

@Injectable()

export class SideListEffects {

  @Effect()
  FetchSideList = this.actions$.pipe(
    ofType(sideListActions.FETCH_ITEMS),
    switchMap(()=>{
      return this.http.get<SideItemModel[]>('https://httprequeststudy-default-rtdb.firebaseio.com/sideList.json')
    }),
    map(items => {
      return items.map(item => {
        return {
          ...item,
          sideList: item ? item : []
        }
      })
    }),
    map(items => {
      return new sideListActions.SetItems(items)
    })
  )


  @Effect({dispatch: false})
  storeSideList = this.actions$.pipe(
    ofType(sideListActions.STORE_ITEMS),
    withLatestFrom(this.store.select('sideList')),
    switchMap(([actionData, sideListData])=>{
      return this.http.put('https://httprequeststudy-default-rtdb.firebaseio.com/sideList.json', sideListData.sideList)
    })
  )


  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<appReducer.AppState>
  ){}
}
