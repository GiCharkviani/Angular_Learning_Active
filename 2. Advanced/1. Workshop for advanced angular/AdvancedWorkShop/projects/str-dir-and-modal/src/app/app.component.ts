import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'strDirAndModal';
  show:boolean = false;
  constructor(private eventManager: EventManager ){}

  ngOnInit(): void {
    // this.eventManager.addGlobalEventListener() აღარ არსებობს
  }
}
