import { TestBed } from '@angular/core/testing';
import { ScriptSelectorStateService } from './script-selector-state.service';

describe('ScriptSelectorStateService', () => {
  let service: ScriptSelectorStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScriptSelectorStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
