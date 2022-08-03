import { Action } from "@ngrx/store";
import { ItemModel } from "../item.model";

export const ADD_ITEM = 'ADD_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'
export const EDIT_ITEM = 'EDIT_ITEM'
export const SET_ITEMS = 'SET_ITEMS'

export const STORE_ITEMS = 'STORE_ITEMS'
export const FETCH_ITEMS = "FETCH_ITEMS"

export class AddItem implements Action {
  readonly type = ADD_ITEM;
  constructor(public payload: ItemModel){}
}

export class DeleteItem implements Action {
  readonly type = DELETE_ITEM;
  constructor(public payload: number){}
}

export class EditItem implements Action {
  readonly type = EDIT_ITEM;
  constructor(public payload:{index:number,newItem: ItemModel}){}
}

export class SetItems implements Action {
  readonly type = SET_ITEMS
  constructor(public payload: ItemModel[]){}
}



export class StoreItems implements Action {
  readonly type = STORE_ITEMS;
}

export class FetchItems implements Action {
  readonly type = FETCH_ITEMS;
}



export type MainListActions = AddItem | DeleteItem | EditItem | SetItems | StoreItems | FetchItems
