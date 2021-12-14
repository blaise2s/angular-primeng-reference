import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ECommerceGuard } from './e-commerce.guard';

describe('ECommerceGuard', () => {
  let guard: ECommerceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    guard = TestBed.inject(ECommerceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
