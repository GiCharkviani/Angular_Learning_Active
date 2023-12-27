import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  constructor() { }

  public getData(): Observable<any[]> {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
