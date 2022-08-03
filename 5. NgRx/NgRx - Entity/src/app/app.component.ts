import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngrx-learning';
  persons: any = [];
  countries: any = [];


  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get<any>('http://localhost:3000/api/persons').subscribe((res) => {
      console.log(res);
      this.persons = res.persons;
    })

    this.http.get<any>('http://localhost:3000/api/countries').subscribe((res) => {
      console.log(res);
      this.countries = res.countries;
    })
  }


  onCreate() {
    this.http.post("http://localhost:3000/api/persons", {name: "Misha", surname: "Kvashali", age: 24}).subscribe(console.log)
  }

  deletePer(id: string) {
    this.http.delete(`http://localhost:3000/api/persons/${id}`).subscribe(console.log)
  }

  update(id: string) {
    this.http.patch(`http://localhost:3000/api/persons/${id}`, {name: "Ramazi", surname: "Charkviani", age: 26}).subscribe(console.log)
  }

  createCountry() {
      this.http.post("http://localhost:3000/api/countries", {name: "Georgia", capital: "Tbilisi"}).subscribe(console.log)
  }

  deleteCountry(id: string) {
    this.http.delete(`http://localhost:3000/api/countries/${id}`).subscribe(console.log)
  }

  updateCountry(id: string) {
    this.http.patch(`http://localhost:3000/api/countries/${id}`, {name: "USA", capital: "Washington"}).subscribe(console.log)
  }
}
