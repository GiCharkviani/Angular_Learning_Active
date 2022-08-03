import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { PersonModel } from '../person.model';

@Injectable()
export class PersonDefaultService extends DefaultDataService<PersonModel> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Person', http, httpUrlGenerator);
  }

  getAll(): Observable<PersonModel[]> {
    return this.http
      .get<PersonModel[]>('http://localhost:3000/api/persons')
      .pipe(shareReplay());
  }

  delete(id: string | number): Observable<number | string> {
    return this.http
      .delete<PersonModel>(`http://localhost:3000/api/persons/${id}`)
      .pipe(
        map((person) => person._id),
        shareReplay()
      );
  }

  add(person: PersonModel): Observable<PersonModel> {
    return this.http
      .post<PersonModel>('http://localhost:3000/api/persons', person)
      .pipe(shareReplay());
  }

  update(person: Update<PersonModel>): Observable<PersonModel> {
    return this.http
      .patch<PersonModel>(
        `http://localhost:3000/api/persons/${person.changes._id}`,
        person.changes
      )
      .pipe(shareReplay());
  }

}
