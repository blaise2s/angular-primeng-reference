import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { defaultLocationsState } from '../constants/locations-state.constants';
import { LocationsState } from '../interfaces/locations-state.interfaces';

@Injectable({
  providedIn: 'root',
})
export class LocationsStateService {
  _state = new BehaviorSubject(defaultLocationsState);

  state(): Observable<LocationsState> {
    return this._state.asObservable();
  }

  currentState(): LocationsState {
    return this._state.getValue();
  }

  setState(state: Partial<LocationsState>) {
    this._state.next({
      ...this.currentState(),
      ...state,
    });
  }
}
