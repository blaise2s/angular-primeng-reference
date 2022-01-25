import { TestBed } from '@angular/core/testing';

import { UploadGuard } from './upload.guard';

describe('UploadGuard', () => {
  let guard: UploadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UploadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
