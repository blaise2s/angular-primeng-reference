import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LocationsGuard } from './locations.guard';

describe('LocationsGuard', () => {
  let guard: LocationsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    guard = TestBed.inject(LocationsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
