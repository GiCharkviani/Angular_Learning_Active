import { Component, OnInit } from "@angular/core";
import { Course } from "../model/course";
import { interval, Observable, of, throwError, timer } from "rxjs";
import {
  catchError,
  delay,
  delayWhen,
  finalize,
  map,
  retryWhen,
  shareReplay,
  tap,
} from "rxjs/operators";
import { createHttpObservable } from "../common/util";
import { Store } from "../common/store.service";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {

  beginnersCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;

  constructor(private store:Store) {}

  ngOnInit() {

    const courses$ = this.store.courses$;

    this.beginnersCourses$ = this.store.selectBeginnerCourses();

    this.advancedCourses$ = this.store.selectAdvancedCourses()

    // users.subscribe((courses) => {
    //   this.beginnersCourses = courses.filter(course => course.category == 'BEGINNER')
    //   this.advancedCourses = courses.filter(course => course.category == 'ADVANCED')
    // });
  }
}
