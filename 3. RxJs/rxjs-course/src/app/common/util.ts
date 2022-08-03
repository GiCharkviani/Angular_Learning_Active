import { response } from "express";
import { Observable } from "rxjs";

export function createHttpObservable(url:string) {
  return Observable.create((observer) => {

    const controller = new AbortController();
    const signal = controller.signal;

    fetch(url, {signal})
      .then((res) => {

        if(res.ok){
          return res.json()
        }
        else {
          observer.error('Request failed with status code: ' + response.status)
        }

      })
      .then((body) => {
        observer.next(body);
        observer.complete();
      })
      .catch((error) => {
        observer.error(error);
      });

     return () => controller.abort()
  });
}

