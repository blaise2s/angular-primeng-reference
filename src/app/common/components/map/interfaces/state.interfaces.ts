export interface StateRollup {
  pos: number;
  ecomm: number;
  total: number;
  numStores: number;
}

export interface SalesByState {
  pos: { [key: string]: number };
  ecomm: { [key: string]: number };
  rollup: {
    [key: string]: StateRollup;
  };
}

export interface State {
  name: string;
  abv: string;
  country: string;
  isstate: boolean;
  islower48: boolean;
  slug: string;
  latitude: number;
  longitude: number;
  population: number;
  area: number;
}
