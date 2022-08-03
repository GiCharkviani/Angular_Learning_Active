import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../users/user-http.service";

@Injectable({providedIn: 'root'})

export class RegistrationGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router){}


  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{

    let registrateOrNot:boolean = false;

    if(sessionStorage.getItem('current-user')){
      this.router.navigate(['/']);
    }else{
      registrateOrNot = true
    }

    return registrateOrNot;
  }
}
