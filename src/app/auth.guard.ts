import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  authServ: AuthenticationService;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authServ.isAuthenticated()) {
      return true;
    } else {
      return false;
    }
  }
}
