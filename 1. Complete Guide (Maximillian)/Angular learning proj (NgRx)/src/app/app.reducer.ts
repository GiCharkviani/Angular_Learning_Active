import { ActionReducerMap } from '@ngrx/store'
import * as fromMainList from './main-list/store/main-list.reducer'
import * as fromSideList from './side-list/store/side-list.reducer'

export interface AppState {
  mainList: fromMainList.State,
  sideList: fromSideList.State
}

export const appReducer: ActionReducerMap<AppState> = {
  mainList: fromMainList.mainListReducer,
  sideList: fromSideList.SideListReducer
}
