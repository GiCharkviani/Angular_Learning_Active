import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HttpService} from "./http.service";
const _ = require("lodash")

export interface Post {
  id: number;
  userId: number;
  body: string;
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  title!: string;
  body!: string;
  showMe: boolean = false;

  posts: Post[] = [];

  constructor(private httpService: HttpService, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {

    const myObj: any = {
      name: "gio",
      surname: "gigicha",
      age: 321
    };

    const newObj: any = {};

    Object
      .keys(myObj)
      .forEach((key: string) =>  myObj[key] && (newObj[key] = myObj[key]));

    const profileChanges1: any = Object
      .keys(myObj)
      .filter((key: string) => myObj[key])
      .reduce((accum: any, currentValue: string) => {
        accum[currentValue] = myObj[currentValue]
        return accum;
      }, {});

    const profileChanges2: any = Object
      .keys(myObj)
      .filter((key: string) => myObj[key])
      .reduce((accum: any, currentValue: string) => ({...accum, [currentValue]: myObj[currentValue]}), {});

    const profileChanges3: any = Object
      .keys(myObj)
      .reduce((accum: any, currentValue: string) => myObj[currentValue] && ({...accum, [currentValue]: myObj[currentValue]}), {});


    console.log(newObj)
  }


}
