import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router'
import { Observable } from "rxjs";
import { filter, first, tap } from "rxjs/operators";
import { CountryService } from "./store/country.service";

@Injectable()

export class CountriesResolver implements Resolve<boolean> {

  constructor(private countryService: CountryService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> {
    return this.countryService.loaded$.pipe(
      tap(loadedData => {
        if(!loadedData){
          this.countryService.getAll()
        }
      }),
      filter(loaded => !!loaded),
      first()
    )
  }

}
