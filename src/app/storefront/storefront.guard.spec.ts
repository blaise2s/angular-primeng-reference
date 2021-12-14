import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StorefrontGuard } from './storefront.guard';

describe('StorefrontGuard', () => {
  let guard: StorefrontGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    guard = TestBed.inject(StorefrontGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
