import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonModel } from '../person.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonService } from '../store/person.service';
import { map, tap } from 'rxjs/operators';

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
  loading$!:Observable<boolean>;
  loaded$!:Observable<boolean>;

  constructor(private personService: PersonService) {
    this.persons$ = personService.entities$;
    this.errorMessage$ = personService.errors$.pipe(map(error => error.payload.data.error.error.message));
    this.loading$ = personService.loading$
   }

  ngOnInit(): void {
    this.addPersonForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      age: new FormControl(null, Validators.required)
    })
  }

  addPerson(){
    const person = {
      _id: '',
      name: this.addPersonForm.value.name,
      surname: this.addPersonForm.value.surname,
      age: this.addPersonForm.value.age
    }
    this.personService.add(person)
    this.addPersonForm.reset()
  }


  editing(personModel: PersonModel){
    this.editMode = false;
    this.selectedPerson$ = this.personService.collection$.pipe(map(person => person.entities[personModel._id]))
  }


  updatePerson(_id:string, name: string, surname: string, age: number, form:HTMLFormElement){
    const updatedPerson = {
      _id,
      name,
      surname,
      age
    }
    this.personService.update(updatedPerson)
    form.reset()
    this.editMode = true;
  }

  deletePerson(id:string){
    this.personService.delete(id)
  }
}
