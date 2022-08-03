import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})

export class LoginGuard implements CanActivate{

  constructor(private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean{
    let loginCan:boolean = false;

    if(!sessionStorage.getItem('current-user')){
      loginCan = true
    }else{
      this.router.navigate(['/chat'])
    }

    return loginCan
  }
}
