import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { FilesComponent } from './files.component';
import { FilesStateService } from './services/files-state.service';

describe('FilesComponent', () => {
  let component: FilesComponent;
  let fixture: ComponentFixture<FilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [FilesComponent],
      providers: [
        DialogService,
        MessageService,
        ConfirmationService,
        FilesStateService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
