import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: './city.component.html'
})

export class CityComponent implements OnInit{

  constructor(private actRoute: ActivatedRoute){}
  city!:string;

  ngOnInit(){
    this.city = this.actRoute.snapshot.params['city']
  }

}
