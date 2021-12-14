import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardGuard } from './dashboard.guard';

describe('DashboardGuard', () => {
  let guard: DashboardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    guard = TestBed.inject(DashboardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
