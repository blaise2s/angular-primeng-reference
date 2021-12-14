import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginSignupGuard } from './login-signup.guard';

describe('LoginGuard', () => {
  let guard: LoginSignupGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    guard = TestBed.inject(LoginSignupGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
