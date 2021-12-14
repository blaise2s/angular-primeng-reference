import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface Login {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly router: Router) {}

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
