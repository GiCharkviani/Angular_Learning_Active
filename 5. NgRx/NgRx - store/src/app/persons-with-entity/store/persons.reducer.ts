import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { PersonModel } from "../person.model";
import * as PersonsActions from './persons.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";


// Entity State Declaration - used in component Store generic type
export interface PersonEntityState extends EntityState<PersonModel> {
  selectedPerson: PersonModel | undefined
}

// Used for Id assignment
export function selectPersonId(a: PersonModel): string {
  return a._id;
}

// Adapter creation
export const personsAdapter: EntityAdapter<PersonModel> = createEntityAdapter<PersonModel>({
  selectId: selectPersonId,
})

// Initial State creation
export const initialState: PersonEntityState = personsAdapter.getInitialState({
  selectedPerson: undefined
})


//selectors
export const personsSelector = personsAdapter.getSelectors()
const personsState = createFeatureSelector<PersonEntityState>('persons');


export const getPersons = createSelector(
  personsState,
  personsSelector.selectAll
)

export const getCount = createSelector(
  personsState,
  personsSelector.selectTotal
)

export const selectEntityPerson = createSelector(
  personsState,
  state => state.selectedPerson
)



// Reducer
export const PersonsReducerEntity = createReducer(
  initialState,
  on(PersonsActions.successLoadingPersons, (state, action) => {
    return personsAdapter.setAll(action.persons, state)
  }),
  on(PersonsActions.selectPerson, (state, action) => {
    return {
      ...state,
      selectedPerson: action.person
    }
  }),
  on(PersonsActions.successAddingPerson, (state, action) => {
    return personsAdapter.addOne(action.person, state)
  }),
  on(PersonsActions.successUpdatingPerson, (state, action) => {
    return personsAdapter.updateOne(action.person, state)
  }),
  on(PersonsActions.successDeletingPerson, (state, action) => {
    return personsAdapter.removeOne(action.id, state)
  }),
)
