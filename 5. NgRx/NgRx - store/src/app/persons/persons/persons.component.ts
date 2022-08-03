import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PersonModel } from '../person.model';
import { errorMessage, getPersons, selectPerson, State } from '../store/persons.reducer';
import * as PersonsActions from '../store/persons.actions'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonsComponent implements OnInit {
  persons$!: Observable<PersonModel[]>;
  addPersonForm!: FormGroup;
  selectedPerson$!: Observable<PersonModel | undefined>;
  editMode:boolean = false;
  errorMessage$!: Observable<string>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.addPersonForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      age: new FormControl(null, Validators.required)
    })

    this.errorMessage$ = this.store.select(errorMessage)

    this.selectedPerson$ = this.store.select(selectPerson)

    this.store.dispatch(PersonsActions.startLoadingPersons());

    this.persons$ = this.store.select(getPersons);
  }

  addPerson(){
    const person = {
      _id: '',
      name: this.addPersonForm.value.name,
      surname: this.addPersonForm.value.surname,
      age: this.addPersonForm.value.age
    }
    this.store.dispatch(PersonsActions.startAddingPerson({person}))
    this.addPersonForm.reset()
  }


  editing(person: PersonModel){
    this.editMode = false;
    this.store.dispatch(PersonsActions.selectPerson({person}))
  }


  updatePerson(_id:string, name: string, surname: string, age: number, form:HTMLFormElement){
    const updatedPerson = {
      _id,
      name,
      surname,
      age
    }
    form.reset()
    this.editMode = true;
    this.store.dispatch(PersonsActions.startUpdatingPerson({person: updatedPerson}))
  }

  deletePerson(id:string){
    this.store.dispatch(PersonsActions.startDeletingPerson({id}))
  }
}
