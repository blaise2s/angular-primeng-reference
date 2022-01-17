import { MapState } from '../interfaces/map-state.interfaces';

export const defaultMapState: MapState = {
  loading: false,
  states: [],
  statesGeoJSON: {
    type: 'FeatureCollection',
    features: [],
  },
};
