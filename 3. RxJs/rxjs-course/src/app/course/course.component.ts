import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "../model/course";
import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  tap,
  delay,
  map,
  concatMap,
  switchMap,
  withLatestFrom,
  concatAll,
  shareReplay,
  throttle,
  throttleTime,
  first,
} from "rxjs/operators";
import { merge, fromEvent, Observable, concat, interval, forkJoin } from "rxjs";
import { Lesson } from "../model/lesson";
import { createHttpObservable } from "../common/util";
import { HttpClient } from "@angular/common/http";
import { debug, RxJsLoggingLevel, setRxJsLoggingLevel } from "../common/debug";
import { Store } from "../common/store.service";

@Component({
  selector: "course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"],
})
export class CourseComponent implements OnInit, AfterViewInit {
  courseId: string;
  course$: Observable<Course>;
  lessons$: Observable<Lesson[]>;

  @ViewChild("searchInput", { static: true }) input: ElementRef;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit() {
    this.courseId = this.route.snapshot.params["id"];

    const course$ = createHttpObservable(
      `https://httprequeststudy-default-rtdb.firebaseio.com/server/COURSES/${this.courseId}.json`
    ).pipe(debug(RxJsLoggingLevel.INFO, "course value "));

    const lessons$ = this.loadLessons();

    forkJoin(course$, lessons$)
    .pipe(
      withLatestFrom(course$)
    )
    .subscribe(([lessons, course])=> {
      console.log(lessons, course)
    })

    // this.http.put('https://httprequeststudy-default-rtdb.firebaseio.com/server.json', {COURSES, LESSONS}).subscribe()

    setRxJsLoggingLevel(RxJsLoggingLevel.TRACE);
  }

  ngAfterViewInit() {
    this.lessons$ = fromEvent<any>(this.input.nativeElement, "keyup").pipe(
      map((event) => event.target.value),
      startWith(""),
      debug(RxJsLoggingLevel.TRACE, "search "),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((search) => this.loadLessons(search)),
      debug(RxJsLoggingLevel.DEBUG, "lessons value ")
    );
  }

  loadLessons(search: string = ""): Observable<Lesson[]> {
    return createHttpObservable(
      `https://httprequeststudy-default-rtdb.firebaseio.com/server/LESSONS.json`
    ).pipe(
      map((res: any) =>
        res.filter((lesson) => {
          if (search) {
            return (
              lesson?.courseId == this.courseId && lesson?.description == search
            );
          }
          return lesson?.courseId == this.courseId;
        })
      )
    );
  }
}
