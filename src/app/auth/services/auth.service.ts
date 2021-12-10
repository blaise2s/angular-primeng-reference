import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

export interface Login {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly router: Router) {}

  login(login: Login): Observable<boolean> {
    /* eslint-disable-next-line no-console */
    console.log(login);
    return of(true).pipe(catchError(() => of(false)));
  }

  loggedIn(): boolean {
    return true;
  }

  verifyLoggedIn(): boolean {
    const loggedIn = this.loggedIn();
    if (!loggedIn) {
      this.router.navigate(['/login']);
    }
    return loggedIn;
  }
}
