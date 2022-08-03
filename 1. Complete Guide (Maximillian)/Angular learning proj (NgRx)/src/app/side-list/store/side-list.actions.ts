import { Action } from "@ngrx/store";
import { SideItemModel } from "../sideItem.model";

export const ADD_ITEM = '[Side] Add Item'
export const SET_ITEMS = '[Side] Set Items'
export const STORE_ITEMS = '[Side] Store Items'
export const FETCH_ITEMS = '[Side] Fetch Items'

export class AddItem implements Action {
  readonly type = ADD_ITEM;
  constructor(public payload: SideItemModel){}
}
export class SetItems implements Action {
  readonly type = SET_ITEMS;
  constructor(public payload: SideItemModel[]){}
}
export class StoreItems implements Action {
  readonly type = STORE_ITEMS;
}
export class FetchItems implements Action {
  readonly type = FETCH_ITEMS;
}

export type SideListActiontypes = AddItem | SetItems | StoreItems | FetchItems
