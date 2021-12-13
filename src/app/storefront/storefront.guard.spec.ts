import { TestBed } from '@angular/core/testing';
import { StorefrontGuard } from './storefront.guard';

describe('StorefrontGuard', () => {
  let guard: StorefrontGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StorefrontGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
