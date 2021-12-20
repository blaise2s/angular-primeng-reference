import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { FileUpload } from 'primeng/fileupload';
import { ToastService } from 'src/app/common/services/toast.service';

@Component({
  selector: 'bz-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadComponent {
  constructor(
    private readonly config: DynamicDialogConfig,
    private readonly toastService: ToastService
  ) {}

  onRemoveFile(event: Event, fileUploader: FileUpload, file: File): void {
    const index = fileUploader.files.indexOf(file);
    fileUploader.remove(event, index);
  }

  onUpload(): void {
    this.config.data.close(true);
    this.toastService.success('Success', 'Files uploaded');
  }

  onError(fileUploader: FileUpload): void {
    fileUploader.progress = 0;
    this.toastService.error('Failure', 'Failed to upload files');
  }
}
