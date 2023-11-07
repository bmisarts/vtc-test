import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Guard to determinate if user is login or not
    let c_user = sessionStorage.getItem("currentUser");    
    let token = c_user?(JSON.parse(c_user)):false;
    if (!token) {
      this.router.navigate(["/auth/login"]);
      return false;
    } 
    return true;  }
  
}
