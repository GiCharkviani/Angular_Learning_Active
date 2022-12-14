import {async, ComponentFixture, fakeAsync, flush, flushMicrotasks, TestBed, tick, waitForAsync} from '@angular/core/testing';
import {HomeComponent} from './home.component';
import {DebugElement} from '@angular/core';
import {CoursesModule} from '../courses.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CoursesService} from '../services/courses.service';
import {setupCourses} from '../common/setup-test-data';
import {By} from '@angular/platform-browser';
import {of} from 'rxjs';

describe("HomeComponent",() => {
  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;
  let el: DebugElement;
  let coursesService: any;

  const beginnerCourses = setupCourses()
    .filter(course => course.category === "BEGINNER");
  const advancedCourses = setupCourses()
    .filter(course => course.category === "ADVANCED");

  beforeEach(waitForAsync(() => {
    const coursesServiceSpy = jasmine.createSpyObj("CoursesService", ['findAllCourses']);

    TestBed.configureTestingModule({
      imports: [
        CoursesModule,
        NoopAnimationsModule // no animation modules
      ],
      providers: [
        {
          provide: CoursesService,
          useValue: coursesServiceSpy
        }
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
        coursesService = TestBed.get(CoursesService);
      })
  }))

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display only beginner courses', () => {
    coursesService.findAllCourses.and.returnValue(of(beginnerCourses));
    fixture.detectChanges();
    const tabs = el.queryAll(By.css(".mat-tab-label"));
    expect(tabs.length).toBe(1, "Unexpected number of tabs found")
  });

  it('should display only advanced courses', () => {
    coursesService.findAllCourses.and.returnValue(of(advancedCourses));
    fixture.detectChanges();
    const tabs = el.queryAll(By.css('.mat-tab-label'));
    expect(tabs.length).toBe(1, "Unexpected number of tabs found")
  });

  it('should the both tabs',  () => {
    coursesService.findAllCourses.and.returnValue(of(setupCourses()));
    fixture.detectChanges();
    const tabs = el.queryAll(By.css(".mat-tab-label"));
    expect(tabs.length).toBe(2, "Expect to find 2 tabs")
  });

  it('should display advanced courses when tab clicked - fakeAsync',  fakeAsync(() => {
    coursesService.findAllCourses.and.returnValue(of(setupCourses()));
    fixture.detectChanges();
    const tabs = el.queryAll(By.css(".mat-tab-label"));
    tabs[1].nativeElement.click();
    fixture.detectChanges();

    flush();

    const cardTitles = el.queryAll(By.css('.mat-tab-body-active .mat-card-title'));
    expect(cardTitles.length).toBeGreaterThan(0, "Could not find card titles");
    expect(cardTitles[0].nativeElement.textContent).toContain("Angular Security Course");

  }));

  it('should display advanced courses when tab clicked - waitForAsync',  waitForAsync(() => {
    coursesService.findAllCourses.and.returnValue(of(setupCourses()));
    fixture.detectChanges();
    const tabs = el.queryAll(By.css(".mat-tab-label"));
    tabs[1].nativeElement.click();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const cardTitles = el.queryAll(By.css('.mat-tab-body-active .mat-card-title'));
      expect(cardTitles.length).toBeGreaterThan(0, "Could not find card titles");
      expect(cardTitles[0].nativeElement.textContent).toContain("Angular Security Course");
    });

  }));
})
