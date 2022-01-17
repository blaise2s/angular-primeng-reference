import { Control, ControlOptions } from 'leaflet';

export class MapInfo<P> extends Control {
  constructor(public update?: (props?: P) => void, options?: ControlOptions) {
    super(options);
  }
}
