import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { shareReplay } from "rxjs/operators";
import { PersonModel } from "./person.model";


@Injectable({providedIn: 'root'})

export class PersonsHttpService {

   constructor(private http: HttpClient){}

   getPersons():Observable<PersonModel[]>{
     return this.http.get<PersonModel[]>('http://localhost:3000/api/persons').pipe(
       shareReplay()
     )
   }

   addPerson(person: PersonModel):Observable<PersonModel>{
     return this.http.post<PersonModel>('http://localhost:3000/api/persons', person).pipe(
      shareReplay()
    )
   }

   updatePerson(person: PersonModel):Observable<PersonModel>{
     return this.http.patch<PersonModel>(`http://localhost:3000/api/persons/${person._id}`, person).pipe(
      shareReplay()
    )
   }

   deletePerson(id:string):Observable<PersonModel>{
     return this.http.delete<PersonModel>(`http://localhost:3000/api/persons/${id}`).pipe(
      shareReplay()
    )
   }
}
