import {Component, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker'
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'jokes';
  update!: boolean;
  joke: any;

  constructor(updates: SwUpdate, private dataService: DataService) {
    updates.available.subscribe(event => {
      console.log(event)
      // this.update = true;
      updates.activateUpdate().then(() => document.location.reload())
    })
  }

  ngOnInit() {
    this.dataService.gimmeJokes().subscribe(res => {
      this.joke = res;
    })
  }
}
