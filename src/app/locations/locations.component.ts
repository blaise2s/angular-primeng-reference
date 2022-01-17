import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { tap } from 'rxjs';
import { ScriptSelectorComponent } from '../common/components/script-selector/script-selector.component';
import { LocationsHelperService } from './services/locations-helper.service';
import { LocationsStateService } from './services/locations-state.service';

@Component({
  selector: 'bz-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationsComponent {
  state = this.locationsStateService.state();

  constructor(
    private readonly locationsStateService: LocationsStateService,
    private readonly locationsHelperService: LocationsHelperService,
    private readonly dialogService: DialogService
  ) {}

  onAnalyze(): void {
    const dialogRef = this.dialogService.open(ScriptSelectorComponent, {
      header: 'Select Script',
      width: '40%',
      height: '70%',
      data: {
        close: (runData?: {
          scriptId: number;
          file1Id: number;
          file2Id: number;
          file3Id: number;
        }) => dialogRef.close(runData),
      },
    });
    dialogRef.onClose
      .pipe(
        tap(
          (runData?: {
            scriptId: number;
            file1Id: number;
            file2Id: number;
            file3Id: number;
          }) => {
            if (runData) {
              // this.locationsHelperService.analyze(1, 3, 2, 1).subscribe();
              this.locationsHelperService
                .analyze(
                  runData.scriptId,
                  runData.file1Id,
                  runData.file2Id,
                  runData.file3Id
                )
                .subscribe();
            }
          }
        )
      )
      .subscribe();
  }
}
