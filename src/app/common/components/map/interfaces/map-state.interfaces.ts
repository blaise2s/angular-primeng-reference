import { FeatureCollection } from 'geojson';
import { State } from './state.interfaces';

export interface MapState {
  loading: boolean;
  states: State[];
  statesGeoJSON: FeatureCollection;
}
