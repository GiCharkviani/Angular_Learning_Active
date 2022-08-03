import * as SideListActions from './side-list.actions'
import { SideItemModel } from '../sideItem.model'

export interface State {
  sideList: SideItemModel[]
}


const InitialState = {
  sideList: []
}



export function SideListReducer(state = InitialState, action: SideListActions.SideListActiontypes){
  switch(action.type){
    case SideListActions.ADD_ITEM:
      return {
        ...state,
        sideList: [...state.sideList, action.payload]
      }
    case SideListActions.SET_ITEMS:
      return{
        ...state,
        sideList: [...action.payload]
      }
    default:
      return state
  }
}
