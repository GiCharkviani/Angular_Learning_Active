## Commands
- ng test - running angular tests
- ng test --no-watch - watching without hot mode;

## General functions
- ```describe('test name', () =>)``` - used for describing general test (Test suit);
- ```it('spec test name', () => )``` - used in describe function to implement specific type of tests
- ```beforeEach(() => )``` - this calls function before each specification (it func);
- ```afterEach(() => {})``` - this calls function after each specification (it func);
### extra features
- ```xdescribe('test name', () =>)``` - adding "x" will disable all test suit;
- ```xit('spec test name', () => )``` - adding "x" will disable all spec test;
- ```fdescribe('test name', () =>)``` - adding "f" will execute only this test suit among the others;
- ```fit('spec test name', () => )``` - adding "f" will execute only this spec test among the others;


## Useful functions for manipulating
- ```pending()```-  used to not run test immediately;
- ```fail()``` - to manually fail test;

## Test assertions
- ```expect()``` - accepts e.g. variable which needs to be tested and then you can call its functions, like: expect(result).toBe(4);
### Utility methods:
- ```toBe(exp, 'Explicit error message')``` - What do we expect out of the assertion, also we can provide second argument, to write more explicit error message, if fails;
- ```toHaveBeenCalledTimes(num)``` - it is called on expect() method, which has in argument object method reference, which we are observing on, and checks if the method was called certain times;

## Jasmine spies
- ```spyOn(objectInstance, 'method name to spy on')``` - it will replace original function with its one in order to spy, how many times it was called, to use later;
- ```jasmine.createSpyObj('FakeObjName', ['method'])``` - instead of creating each dependency instance for testing our service, we can just fake them, as they might have their own dependencies as well;
- ```const logger =  jasmine.createSpyObj('FakeObjName', ['method']); logger.log.and.returnValue(What to return);``` - .and.returnValue() would be needed if method returns anything;

## Dependency Injection
``` 
  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LoggerService', ["log"]);
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        {provide: LoggerService, useValue: loggerSpy}
      ]
    });
    calculator = TestBed.get(CalculatorService);
  });
  
```
<em> TestBed global object has property <b>configureTestingModule()</b> which helps us to configure dependency injection in tests, in order to have access on single (real) instance of service for example;</em>

### Utilities
#### 1. HttpTestingModule
<em>We can provide in imports array <b>HttpClientTestingModule</b>, instead of HttpClient module, in order to return fake data, without calling real API. And later save data in a variable, which is <b>HttpTestingController</b> type;</em>
``` 
   let coursesService: CoursesService, httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CoursesService
      ]
    });

    coursesService = TestBed.get(CoursesService);
    httpTestingController = TestBed.get(HttpTestingController);
  })
  
  it("should retrieve all courses", () => {
    coursesService.findAllCourses()
      .subscribe(courses => {
        expect(courses).toBeTruthy('No courses returned');
        expect(courses.length).toBe(12, "Incorrect number of courses");
        const course = courses.find(course => course.id == 12);
        expect(course.titles.description).toBe("Angular Testing Course");
      });

    const req = httpTestingController.expectOne('/api/courses');
    expect(req.request.method).toEqual("GET");
    req.flush({
      payload: Object.values(COURSES)
    });
  })
```
##### Details from above:
- ```flush()``` - As we are using testingModule, we don't actually making requests, that's why we need some fake data, in which flush() helps us to imitate date from backend in order to provide observable.
- ```verify()``` - This makes sure that expectOne() function is properly working as we only expect one call.


#### 2. Components Testing
``` 
  let component: CoursesCardListComponent;
  let fixture: ComponentFixture<CoursesCardListComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CoursesModule]
    })
      .compileComponents()
      .then(() => {
          fixture = TestBed.createComponent(CoursesCardListComponent);
          component = fixture.componentInstance;
          el = fixture.debugElement;
      });
  } ))
```
##### Details from above:
- ```compileComponents()``` - Will compile all components imported from imports array. this method is asynchronous, therefore we have to call on it .then() method and implement code inside then callback function;
- ```ComponentFixture<component>``` - Will let us to get access on specific component and it's features;
- ```TestBed.createComponent(component)``` - after compilation, we can create specific component, in order to get access on it;
- ```waitForAsync()``` - this function will be executed beforeEach function and before all test specifics runs, and will wait on internal async functions to complete, and only then continues;
- ```DebugElement``` - Is going to help us to get access on element's css, as example;

#### Methods from DebugElement in use (self-expl.):
```
  component.courses = setupCourses();
  fixture.detectChanges();
  const course = component.courses[0];
  // const cards = el.queryAll(By.css('.course-card'));
  const card = el.query(By.css('.course-card:first-child'));
  const title = card.query(By.css("mat-card-title"));
  const image = card.query((By.css("img")));

  expect(card).toBeTruthy("Could not find course card");
  expect(title.nativeElement.textContent).toBe(course.titles.description);
  expect(image.nativeElement.src).toBe(course.iconUrl);
```
##### Details from above: 
- ```detectChanges()``` - It is needed to run if any changes should occur in DOM;

## Async testing
### Done function:
``` 
  it('...',  (done: DoneFn) => {
  ...
    setTimeout(() => {
    ...
          done();
    }, 1000)
  });
```
##### Details from above: 
- ```done()``` - is used, when in spec tests we have an async calls, therefore test won't finish until done() function is called, otherwise it wouldn't wait for async funtion to finish;

### fakeAsync function:
#### Task Queue
```
  it('Async test example - setTimeout() ',   fakeAsync(() => {
    let test = false;

    setTimeout(() => {});

    setTimeout(() => {
      test = true;
      expect(test).toBeTruthy();
    }, 1000);

    flush();

    // tick(1000);
    
    // also so:
    // tick(500);
    // tick(500);
    
    expect(test).toBeTruthy(); // IT WILL WORK AS WELL
  }));
```

#### Micro Task Queue (Promise based)
```
 it('Async test example - plain Promise',  fakeAsync(() => {
    let test = false;

    Promise.resolve().then(() => {
      console.log('First promise')
      return Promise.resolve();
    }).then(() => {
      test = true;
      console.log('Second promise')
    })

    flushMicrotasks();

    expect(test).toBeTruthy();
  }));
```

#### Micro Tasks + Tasks
```
it('Async test example - Promises + setTimeout()',  fakeAsync(() => {
    let counter = 0;

    Promise.resolve()
      .then(() => {
        counter += 10;

        setTimeout(() => {
          counter += 1;
        }, 1000);
      })

    expect(counter).toBe(0);
    flushMicrotasks();
    expect(counter).toBe(10);
    tick(500)
    expect(counter).toBe(10);
    tick(500)
    expect(counter).toBe(11);

  }));
```

#### Observables
```
it('Async test example - Observables',  fakeAsync(() => {
    let test = false;

    const test$ = of(test).pipe(delay(500));
    test$.subscribe(() => {
      test = true;
    })

    tick(1000);

    expect(test).toBe(true);

  }));
```

##### Details from above:
- ```fakeAsync()``` - in this function we have to wrap all spec test's callback function. it comes from angular, and helps us to empower async functions handling;
- ```tick(number)``` - can be called only in fakeAsync(). We can specify milliseconds (time) that async function needs to execute, in order to wait for it and it's block to execute. can be used several of them setting time;
- ```flush()``` - can be called only in fakeAsync(). besides tick, it will wait for all async functions to complete and execute;
- ```flushMicrotasks()``` - only executes microtasks, such as Promises;

#### waitForAsync vs fakeAsync
main difference is that, waitForAsync will require from us to call .whenStable() method on fixture for example, and then in its .then() block to execute our code; </br>
also, waitForAsync is usually used when we actually have make http calls, which is not supported by fakeAsync;

# E2E Testing
## Commands
- npm install --dev cypress - Cypress is a e2e testing library;
- cypress open - to start Cypress;

## Start
We will have generated folder named cypress, where will be folder - integration. Here we will write our integrated tests, for example creating file named - home.test.js
describe(), it() and beforeEach()  functions are used in the same way;
also when we run app, we have to make sure, that in cypress.json baseUrl is correct;

### Main functions
```
describe("Home Page", () => {
it('should display a list of courses', () => {
cy.fixture('courses.json').as("coursesJSON");

cy.server();

cy.route("/api/courses", "@coursesJSON").as("courses");

cy.visit('/');

cy.contains("All Courses");

cy.wait("@courses");

cy.get("mat-card").should("have.length", 9);
});
});
```
- ```cy()``` - is a global variable, where we can call functions;
- ```cy.visit('/')``` - will visit baseUrl;
- ```cy.contains("All Courses")``` - checks if DOM contains specific text;
- ```cy.fixture('courses.json').as("coursesJSON")``` - fixture is also a folder in cypress directory, where we can keep json files, which will imitate backend response data. in this function we just call that file that is located in fixtures folder;
- ```cy.server()``` - this will run cypress server. without this we can't call .route() method;
- ```cy.route("/api/courses", "@coursesJSON").as("courses")``` - This function will accept calls on specified route;
- ```.as()``` - in this type of calls, we specify aliases;
- ```cy.wait("@courses")``` - this will wait backend call to complete, only after this we can get access to DOM to check.
- ```cy.get("mat-card").should("have.length", 9)``` - .get() gives us specific element from DOM, and .should() is already assertion;


### DOM Interactions
```
 it('should display the advanced courses', () => {
    cy.get('.mat-tab-label').should("have.length", 2);
    cy.get('.mat-tab-label').last().click();
    cy.get('.mat-tab-body-active .mat-card-title').its('length')
      .should('be.gt', 1);
    cy.get('.mat-tab-body-active .mat-card-title').first()
      .should('contain', 'Angular Security Course')
  });
```

## Check which files are fully tested
ng test --watch=false --code-coverage
