import { TestBed } from '@angular/core/testing';

import { LocationsHelperService } from './locations-helper.service';

describe('LocationsHelperService', () => {
  let service: LocationsHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationsHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
