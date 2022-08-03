import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';
import { PersonService } from './store/person.service';

@Injectable()

export class PersonsResolver implements Resolve<boolean> {
  constructor(private personService: PersonService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.personService.loaded$.pipe(
      tap((dataLoaded) => {
        if (!dataLoaded) {
          this.personService.getAll();
        }
      }),
      filter((loaded) => !!loaded),
      first()
    );
  }
}
