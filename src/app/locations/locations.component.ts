import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LocationsStateService } from './services/locations-state.service';

@Component({
  selector: 'bz-locations',
  templateUrl: './locations.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationsComponent implements OnInit {
  state = this.locationsStateService.state();

  constructor(private readonly locationsStateService: LocationsStateService) {}

  ngOnInit(): void {
    this.locationsStateService.initializeState();
  }
}
