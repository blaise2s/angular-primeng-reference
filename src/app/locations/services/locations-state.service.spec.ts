import { TestBed } from '@angular/core/testing';

import { LocationsStateService } from './locations-state.service';

describe('LocationsStateService', () => {
  let service: LocationsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
