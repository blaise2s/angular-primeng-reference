import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { AnalysisService } from './analysis.service';
import { LocationsStateService } from './locations-state.service';

@Injectable({
  providedIn: 'root',
})
export class LocationsHelperService {
  constructor(
    private readonly analysisService: AnalysisService,
    private readonly LocationsStateService: LocationsStateService
  ) {}

  analyze(
    scriptId: number,
    file1Id: number,
    file2Id?: number,
    file3Id?: number
  ) {
    this.LocationsStateService.setState({ loading: true });
    return this.analysisService
      .analyze(scriptId, file1Id, file2Id, file3Id)
      .pipe(
        tap(result => {
          this.LocationsStateService.setState({
            loading: false,
            salesByState: result.data.analyze,
          });
        })
      );
  }
}
