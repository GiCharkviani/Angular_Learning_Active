import { ItemModel } from "../item.model";
import * as MainListActions from './main-list.actions'

export interface State {
  mainList: ItemModel[]
}

const initialState = {
  mainList: []
}


export function mainListReducer(state = initialState, action:MainListActions.MainListActions){
  switch(action.type){
    case MainListActions.ADD_ITEM:
      return {
        ...state,
        mainList: [...state.mainList, action.payload]
      };
    case MainListActions.DELETE_ITEM:
      return {
        ...state,
        mainList: state.mainList.filter((item, itemIndex)=>{
          return itemIndex !== action.payload
        })
      };
    case MainListActions.EDIT_ITEM:
      const updatedMainListItem = {
        ...state.mainList[action.payload.index],
        ...action.payload.newItem
      };

      const updatedMainList = [...state.mainList];
      updatedMainList[action.payload.index] = updatedMainListItem;
      console.log(updatedMainList)
      return {
        ...state,
        mainList:updatedMainList
      };

    case MainListActions.SET_ITEMS:
      return {
        ...state,
        mainList: [...action.payload]
      }

    default:
      return state;
  }
}
