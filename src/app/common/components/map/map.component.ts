import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Feature } from 'geojson';
import {
  Browser,
  DomUtil,
  geoJSON,
  Layer,
  LeafletMouseEvent,
  map,
  Map,
  tileLayer,
} from 'leaflet';
import { Subject, takeUntil } from 'rxjs';
import { SalesByState, StateRollup } from './interfaces/state.interfaces';
import { MapInfo } from './map-info';
import { MapStateService } from './services/map-state.service';

@Component({
  selector: 'bz-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() salesByState!: SalesByState;
  @Input() fillColorProp!: string;
  @Input() initialMapCenter: [number, number] = [39.8282, -98.5795];
  @Input() initialMapZoom = 5;

  state = this.mapStateService.state();
  private map!: Map;
  private mapInfo!: HTMLDivElement;
  private destroy = new Subject<void>();

  constructor(private readonly mapStateService: MapStateService) {}

  ngOnInit(): void {
    this.mapStateService.initializeState(this.salesByState);
  }

  ngOnDestroy(): void {
    this.destroy.next();
  }

  ngAfterViewInit(): void {
    this.state.pipe(takeUntil(this.destroy)).subscribe(nextState => {
      if (!nextState.loading) {
        this.initMap();
      }
    });
  }

  initMap(): void {
    this.map = map('map', {
      center: this.initialMapCenter,
      zoom: this.initialMapZoom,
    });

    const tiles = tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );
    tiles.addTo(this.map);

    const getColor = (d: number) => {
      // TODO: Can this be done (calculated) better based on the values that are min and max?
      const value =
        d > 1000000
          ? '#084594'
          : d > 500000
          ? '#2171b5'
          : d > 250000
          ? '#4292c6'
          : d > 125000
          ? '#6baed6'
          : d > 62500
          ? '#9ecae1'
          : d > 31250
          ? '#c6dbef'
          : d > 15625
          ? '#deebf7'
          : '#f7fbff';
      return value;
    };

    const style = (feature: any) => {
      return {
        fillColor: getColor(feature.properties[this.fillColorProp]),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7,
      };
    };

    const highlightFeature = (e: LeafletMouseEvent) => {
      const layer = e.target;

      layer?.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7,
      });

      if (!Browser.ie && !Browser.opera && !Browser.edge) {
        layer.bringToFront();
      }

      if (info.update) {
        info.addTo(this.map);
        info.update(layer.feature.properties);
      }
    };

    const resetHighlight = (e: LeafletMouseEvent) => {
      geoJson.resetStyle(e.target);
      if (info.update) {
        info.remove();
      }
    };

    const zoomToFeature = (e: LeafletMouseEvent) => {
      this.map.fitBounds(e.target.getBounds());
    };

    const onEachFeature = (feature: Feature, layer: Layer) => {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature,
      });
    };

    const info = new MapInfo<StateRollup & { abv: string }>();
    info.onAdd = () => {
      this.mapInfo = DomUtil.create('div', 'info');
      return this.mapInfo;
    };
    info.update = props => {
      this.mapInfo.innerHTML =
        '<h4>' +
        (props ? props.abv : '') +
        '</h4>' +
        (props
          ? 'POS: <b>' +
            props.pos +
            '</b><br />Ecomm: <b>' +
            props.ecomm +
            '</b><br />Total: <b>' +
            props.total +
            '</b><br />Stores: <b>' +
            props.numStores +
            '</b>'
          : 'Hover over a state');
    };

    const geoJson = geoJSON(this.mapStateService.currentState().statesGeoJSON, {
      style,
      onEachFeature,
    });
    geoJson.addTo(this.map);
  }
}
