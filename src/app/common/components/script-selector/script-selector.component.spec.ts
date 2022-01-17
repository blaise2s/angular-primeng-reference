import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScriptSelectorComponent } from './script-selector.component';

describe('ScriptSelectorComponent', () => {
  let component: ScriptSelectorComponent;
  let fixture: ComponentFixture<ScriptSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScriptSelectorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
