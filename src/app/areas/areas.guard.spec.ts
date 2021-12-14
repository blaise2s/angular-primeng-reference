import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AreasGuard } from './areas.guard';

describe('AreasGuard', () => {
  let guard: AreasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    guard = TestBed.inject(AreasGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
