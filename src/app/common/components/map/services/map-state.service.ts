import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable, tap } from 'rxjs';
import { defaultMapState } from '../constants/map-state.constants';
import { MapState } from '../interfaces/map-state.interfaces';
import { SalesByState } from '../interfaces/state.interfaces';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root',
})
export class MapStateService {
  constructor(private readonly stateService: StateService) {}

  _state = new BehaviorSubject(defaultMapState);

  state(): Observable<MapState> {
    return this._state.asObservable();
  }

  currentState(): MapState {
    return this._state.getValue();
  }

  setState(state: Partial<MapState>) {
    this._state.next({
      ...this.currentState(),
      ...state,
    });
  }

  initializeState(salesByState: SalesByState): void {
    this.setState({ loading: true });
    forkJoin({
      statesGeoJSON: this.stateService.getStatesGeoJSON(),
      // statesResult: this.stateService.getStates(),
    })
      .pipe(
        // tap(({ statesGeoJSON, statesResult }) => {
        tap(({ statesGeoJSON }) => {
          statesGeoJSON.features.forEach(feature => {
            const subKey: string = feature.properties?.['abv'];
            const stateDataRollup = salesByState.rollup[subKey];
            const entries = Object.entries(stateDataRollup);
            entries.forEach(entry => {
              if (!feature.properties) {
                feature.properties = {};
              }
              feature.properties[entry[0]] = entry[1];
            });
          });

          this.setState({
            statesGeoJSON,
            // states: statesResult.data.states,
            loading: false,
          });
        })
      )
      .subscribe();
  }
}
