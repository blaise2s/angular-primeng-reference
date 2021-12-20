import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { tap } from 'rxjs';
import { AppService } from '../app.service';
import { RenameComponent } from './components/rename/rename.component';
import { UploadComponent } from './components/upload/upload.component';
import { FilesStateService } from './services/files-state.service';

@Component({
  selector: 'bz-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilesComponent implements OnInit {
  state = this.filesStateService.state();

  constructor(
    private readonly dialogService: DialogService,
    private readonly filesStateService: FilesStateService,
    private readonly confirmationService: ConfirmationService,
    private readonly appService: AppService
  ) {}

  ngOnInit(): void {
    this.filesStateService.initializeState();
  }

  onRename(): void {
    const selectedUpload =
      this.filesStateService.currentState().selectedUploads[0];
    const dialogRef = this.dialogService.open(RenameComponent, {
      header: 'Rename File',
      width: '70%',
      data: {
        close: (newName: string) =>
          dialogRef.close({ newName, id: selectedUpload.id }),
        upload: selectedUpload,
      },
    });
    dialogRef.onClose
      .pipe(
        tap(({ id, newName }: { id: number; newName: string }) => {
          if (newName && newName.trim()) {
            this.filesStateService.renameUpload(id, newName.trim());
          }
        })
      )
      .subscribe();
  }

  onUpload(): void {
    const dialogRef = this.dialogService.open(UploadComponent, {
      header: 'Upload Files',
      width: '70%',
      height: '75%',
      data: {
        close: (uploaded: boolean) => dialogRef.close({ uploaded }),
      },
    });
    dialogRef.onClose
      .pipe(
        tap(({ uploaded }: { uploaded?: boolean }) => {
          if (uploaded) {
            // Note: This may need to change later if other things happen when
            // initializing state, at that point breakout refreshing of files
            this.filesStateService.initializeState();
          }
        })
      )
      .subscribe();
  }

  onFilter(event: Event, table: Table): void {
    this.filesStateService.setState({ selectedUploads: [] });
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  onDelete(): void {
    this.confirmationService.confirm({
      message: 'Do you want to delete the selected files?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        if (this.appService.graphQLEnabled()) {
          return this.filesStateService.deleteUploadsGql(
            this.filesStateService.currentState().selectedUploads
          );
        } else {
          return this.filesStateService.deleteUploadsRest(
            this.filesStateService.currentState().selectedUploads
          );
        }
      },
    });
  }
}
