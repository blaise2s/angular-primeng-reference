import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';
import { FilesStateService } from './files-state.service';

describe('FilesStateService', () => {
  let service: FilesStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [MessageService],
    });
    service = TestBed.inject(FilesStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
