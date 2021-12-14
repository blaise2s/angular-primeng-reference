import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilesGuard } from './files.guard';

describe('FilesGuard', () => {
  let guard: FilesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    guard = TestBed.inject(FilesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
