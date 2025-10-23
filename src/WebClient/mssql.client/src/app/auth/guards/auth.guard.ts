//import { Injectable } from '@angular/core';
//import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
//import { Observable } from 'rxjs';
//import { AuthService } from '../services/auth.service';

//@Injectable({
//  providedIn: 'root'
//})
//export class AuthGuard implements CanActivate {
//  constructor(
//    private authService: AuthService,
//    private router: Router
//  ) {}

//  canActivate(
//    route: ActivatedRouteSnapshot,
//    state: RouterStateSnapshot
//  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

//    if (this.authService.isAuthenticatedValue && !this.authService.isTokenExpired()) {
//      return true;
//    }

//    // Not logged in or token expired, redirect to login page
//    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
//    return false;
//  }
//}

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthenticated = this.authService.isAuthenticatedValue;

    if (isAuthenticated) {
      // User is logged in, allow access
      return true;
    }

    // User is not logged in, redirect to login page with return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
