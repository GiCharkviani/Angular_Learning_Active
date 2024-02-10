import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn, Route,
  Router,
  RouterStateSnapshot,
  UrlSegment
} from "@angular/router";

export const canActivate: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  console.log(next, 'NEXT')
  console.log(state, 'STATE')
  return false;
}

export const canMatch: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  console.log(route, 'ROUTE')
  console.log(segments, 'SEGMENT')
  return false;
}
