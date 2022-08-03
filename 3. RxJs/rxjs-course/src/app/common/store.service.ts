import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { fromPromise } from "rxjs/internal-compatibility";
import {
  catchError,
  delay,
  finalize,
  map,
  retryWhen,
  shareReplay,
  tap,
} from "rxjs/operators";
import { Course } from "../model/course";
import { createHttpObservable } from "./util";

@Injectable({ providedIn: "root" })
export class Store {
  private subject = new BehaviorSubject<Course[]>([]);

  courses$: Observable<Course[]> = this.subject.asObservable();

  init() {
    const http$: Observable<Course[]> = createHttpObservable(
      "https://httprequeststudy-default-rtdb.firebaseio.com/server.json"
    );
    const courses$ = http$
      .pipe(
        tap(() => console.log("http request executed")),
        map((courses) => courses["COURSES"])
      )
      .subscribe((courses) => this.subject.next(courses));
  }

  selectBeginnerCourses() {
    return this.filterByCategory("BEGINNER");
  }

  selectAdvancedCourses() {
    return this.filterByCategory("ADVANCED");
  }

  filterByCategory(category: string) {
    return this.courses$.pipe(
      map((courses) => courses.filter((course) => course.category == category))
    );
  }

  saveCourse(courseId: number, changes): Observable<any> {
    const courses = this.subject.getValue();
    const courseIndex = courses.findIndex((course) => course.id == courseId);
    const newCourses = courses.slice(0);

    newCourses[courseIndex] = {
      ...courses[courseIndex],
      ...changes,
    };

    this.subject.next(newCourses);

    return fromPromise(
      fetch(
        `https://httprequeststudy-default-rtdb.firebaseio.com/server/courses/${courseId}.json`,
        {
          method: "PUT",
          body: JSON.stringify(changes),
          headers: {
            'content-type': 'application/json'
          }
        }
      )
    );

  }




}
