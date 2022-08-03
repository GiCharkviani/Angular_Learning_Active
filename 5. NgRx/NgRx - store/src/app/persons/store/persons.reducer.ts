import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { PersonModel } from "../person.model";
import * as PersonsActions from './persons.actions';
import * as AppState from '../../state/app.state'

export interface State extends AppState.State {
  persons: PersonState
}


interface PersonState {
  persons:PersonModel[],
  selectedPerson: PersonModel | undefined,
  error: string
}

const initialState: PersonState = {
  persons: [],
  selectedPerson: undefined,
  error: ''
}

//selectors

const dataSelector = createFeatureSelector<PersonState>('persons');

export const getPersons = createSelector(
  dataSelector,
  state => state.persons
)
export const selectPerson = createSelector(
  dataSelector,
  state => state.selectedPerson
)
export const errorMessage = createSelector(
  dataSelector,
  state => state.error
)

//reducer
export const PersonsReducer = createReducer<PersonState>(
  initialState,
  on(PersonsActions.successLoadingPersons, (state, action) => {
    return {
      ...state,
      persons: action.persons
    }
  }),
  on(PersonsActions.failedLoadingPersons, (state, action) => {
    return {
      ...state,
      persons: [],
      error: action.error
    }
  }),
  on(PersonsActions.successAddingPerson, (state, action) => {
    return {
      ...state,
      persons: [...state.persons, action.person]
    }
  }),
  on(PersonsActions.failedAddingPerson, (state, action) => {
    return {
      ...state,
      error: action.error
    }
  }),
  on(PersonsActions.selectPerson, (state, action) => {
    return {
      ...state,
      selectedPerson: action.person
    }
  }),
  on(PersonsActions.successUpdatingPerson, (state, action) => {
    const foundIndex = state.persons.findIndex(person => person._id === action.person._id);
    const updatedPersons = state.persons.slice();
    updatedPersons[foundIndex] = action.person
    return {
      ...state,
      persons: updatedPersons
    }
  }),
  on(PersonsActions.failedUpdatingPerson, (state, action) => {
    return {
      ...state,
      error: action.error
    }
  }),
  on(PersonsActions.successDeletingPerson, (state, action) => {
    return {
      ...state,
      persons: [...state.persons.filter(person => person._id !== action.id)]
    }
  }),
  on(PersonsActions.failedDeletingPerson, (state, action) => {
    return {
      ...state,
      error: action.error
    }
  })
)
