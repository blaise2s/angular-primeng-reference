import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { RenameComponent } from './rename.component';

describe('RenameComponent', () => {
  let component: RenameComponent;
  let fixture: ComponentFixture<RenameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RenameComponent],
      providers: [DynamicDialogConfig],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
