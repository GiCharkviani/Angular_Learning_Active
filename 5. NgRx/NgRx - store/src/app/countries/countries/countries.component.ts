import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CountryModel } from '../country.model';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { getCountries, getError, SelectCountry, State } from '../store/country.reducer';
import * as CountryActions from '../store/country.actions';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountriesComponent implements OnInit {
  countries$!: Observable<CountryModel[]>;
  selectedCountry$!:Observable<CountryModel | undefined>;

  editing:boolean = false;

  countryForms!: FormGroup;

  errorMessage$!: Observable<string>;
  selected:boolean = false;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    //form
    this.countryForms = new FormGroup({
      name: new FormControl('', Validators.required),
      capital: new FormControl('', Validators.required),
    });
    //store:
    this.store.dispatch(CountryActions.StartedLoadingCountries());
    //selecting well
    this.countries$ = this.store.select(getCountries);
    //select country
    this.selectedCountry$ = this.store.select(SelectCountry)

    //error handler
    this.errorMessage$ = this.store.select(getError);
  }

  addForm() {
    const country: CountryModel = {
      _id: '',
      name: this.countryForms.value.name,
      capital: this.countryForms.value.capital,
    };
    this.store.dispatch(CountryActions.StartedAddingCountry({ country }));
    this.countryForms.reset();
  }
  delete(event:any,id:string){
    this.store.dispatch(CountryActions.StartedDeletingCountry({countryId: id}))
  }
  switchEdit(){
    this.editing = !this.editing
  }
  selectCountry(id:string){
    this.store.dispatch(CountryActions.SelectCountry({id}))
  }
  editCountry(editForm: NgForm, id:string){
    const country:CountryModel = {
      _id: id,
      name: editForm.value.countryName,
      capital: editForm.value.capital
    }
    this.store.dispatch(CountryActions.StartedEditingCountry({country}))
    editForm.reset()
  }
}
