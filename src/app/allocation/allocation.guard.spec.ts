import { TestBed } from '@angular/core/testing';

import { AllocationGuard } from './allocation.guard';

describe('AllocationGuard', () => {
  let guard: AllocationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AllocationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
