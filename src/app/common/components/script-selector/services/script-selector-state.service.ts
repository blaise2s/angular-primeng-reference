import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable, tap } from 'rxjs';
import { UploadsService } from 'src/app/common/services/uploads.service';
import { defaultScriptSelectorState } from '../constants/script-selector-state.constants';
import { ScriptSelectorState } from '../interfaces/script-selector-state.interfaces';
import { ScriptService } from './script.service';

@Injectable({
  providedIn: 'root',
})
export class ScriptSelectorStateService {
  _state = new BehaviorSubject(defaultScriptSelectorState);

  constructor(
    private readonly scriptService: ScriptService,
    private readonly UploadsService: UploadsService
  ) {}

  state(): Observable<ScriptSelectorState> {
    return this._state.asObservable();
  }

  currentState(): ScriptSelectorState {
    return this._state.getValue();
  }

  setState(state: Partial<ScriptSelectorState>) {
    this._state.next({
      ...this.currentState(),
      ...state,
    });
  }

  initializeState(): void {
    this.setState({ loading: true });
    forkJoin({
      scriptsResult: this.scriptService.getScriptsGql(),
      uploadsResult: this.UploadsService.getUploadsGql(),
    })
      .pipe(
        tap(({ scriptsResult, uploadsResult }) => {
          this.setState({
            scripts: scriptsResult.data.scripts,
            files: uploadsResult.data.uploads,
            loading: false,
          });
        })
      )
      .subscribe();
  }
}
