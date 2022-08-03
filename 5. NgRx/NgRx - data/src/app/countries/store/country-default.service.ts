import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CountryModel } from '../country.model';

@Injectable()
export class CountryDataService extends DefaultDataService<CountryModel> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Country', http, httpUrlGenerator);
  }

  getAll(): Observable<CountryModel[]> {
    return this.http
      .get<CountryModel[]>('http://localhost:3000/api/countries')
      .pipe(shareReplay());
  }

  delete(id: number | string): Observable<number | string> {
    return this.http
      .delete<CountryModel>('http://localhost:3000/api/countries/' + id)
      .pipe(map((deleted) => deleted._id));
  }

  add(country: CountryModel): Observable<CountryModel> {
    return this.http.post<CountryModel>(
      'http://localhost:3000/api/countries',
      country
    ).pipe(shareReplay());
  }

  update(country: Update<CountryModel>):Observable<CountryModel> {
    return this.http.patch<CountryModel>(`http://localhost:3000/api/countries/${country.id}`, country.changes)
  }

}
