import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { CountryModel } from './country.model';



@Injectable({ providedIn: 'root' })
export class CountryHttpService {
  constructor(private http: HttpClient) {}

  getCountries(): Observable<CountryModel[]> {
    return this.http.get<CountryModel[]>('http://localhost:3000/api/countries').pipe(
      shareReplay()
      );
  }

  postCountry(country: CountryModel): Observable<CountryModel> {
    return this.http.post<CountryModel>(
      'http://localhost:3000/api/countries',
      country
    ).pipe(shareReplay());
  }

  deleteCountry(countryId:string):Observable<string>{
    return this.http.delete<CountryModel>('http://localhost:3000/api/countries/'+countryId).pipe(
      map(deleted => deleted._id)
    )
  }

  editCountry(country: CountryModel): Observable<CountryModel>{
    return this.http.patch<CountryModel>(`http://localhost:3000/api/countries/${country._id}`, country)
  }
}
