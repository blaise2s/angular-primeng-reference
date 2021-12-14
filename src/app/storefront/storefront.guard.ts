import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../common/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class StorefrontGuard implements CanActivate, CanLoad {
  constructor(private readonly authService: AuthService) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.verifyLoggedIn();
  }
  canLoad():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.verifyLoggedIn();
  }
}
