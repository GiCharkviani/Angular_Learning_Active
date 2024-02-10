import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn, ResolveFn, Route,
  RouterStateSnapshot,
  UrlSegment
} from "@angular/router";
import {delay, map, of, throwError} from "rxjs";

export const canActivate: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  console.log(next, 'NEXT')
  console.log(state, 'STATE')
  return true;
}

export const canMatch: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  console.log(route, 'ROUTE')
  console.log(segments, 'SEGMENT')
  return true;
}

export const resolveData: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return of({name: 'avto'}).pipe(delay(200));
}
