import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { LoadingModule } from '../common/components/loading/loading.module';
import { UploadButtonComponent } from './components/upload-button/upload-button.component';
import { UploadComponent } from './components/upload/upload.component';
import { FilesComponent } from './files.component';

@NgModule({
  declarations: [FilesComponent, UploadComponent, UploadButtonComponent],
  exports: [FilesComponent, UploadComponent, UploadButtonComponent],
  imports: [
    CommonModule,
    DynamicDialogModule,
    ButtonModule,
    FileUploadModule,
    RippleModule,
    TableModule,
    InputTextModule,
    LoadingModule,
    ConfirmDialogModule,
  ],
})
export class FilesModule {}
