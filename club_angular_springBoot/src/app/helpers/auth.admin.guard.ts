import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services';


@Injectable({ providedIn: 'root' })
export class AuthGuardADMIN implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authenticationService.isAdmin ) {
          window.alert('Access Denied, you as a admin dont have access to login et register!');
          this.router.navigate(['dashboard']);  
          return false
        }
        return true;
      }


    }
    