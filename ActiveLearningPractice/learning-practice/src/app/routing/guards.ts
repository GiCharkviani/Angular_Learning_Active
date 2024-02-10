import {ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot} from "@angular/router";

export const canActivate: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  console.log(next, 'NEXT')
  console.log(state, 'STATE')
  return true;
}
