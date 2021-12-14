import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { UploadsService } from './uploads.service';

describe('UploadsService', () => {
  let service: UploadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(UploadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
