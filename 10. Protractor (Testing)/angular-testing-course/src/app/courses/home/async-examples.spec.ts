import {fakeAsync, flush, flushMicrotasks, tick} from '@angular/core/testing';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

describe("Async Testing Examples", () => {

  it('Asynchronous test example with Jasmine done() ',  (done: DoneFn) => {
    let test = false;

    setTimeout(() => {
      test = true;
      expect(test).toBeTruthy();
      done();
    }, 1000);
  });

  it('Async test example - setTimeout() ',   fakeAsync(() => {
    let test = false;

    setTimeout(() => {});

    setTimeout(() => {
      test = true;
      expect(test).toBeTruthy();
    }, 1000);

    flush();

    // tick(1000);
    expect(test).toBeTruthy(); // IT WILL WORK AS WELL
  }));

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

  it('Async test example - Observables',  fakeAsync(() => {
    let test = false;

    const test$ = of(test).pipe(delay(500));
    test$.subscribe(() => {
      test = true;
    })

    tick(1000);

    expect(test).toBe(true);

  }));

})
