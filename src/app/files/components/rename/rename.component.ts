import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'bz-rename',
  templateUrl: './rename.component.html',
  styleUrls: ['./rename.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RenameComponent {
  get currentName(): string {
    return this.config.data.upload.originalname;
  }
  newName: string | undefined;

  constructor(private readonly config: DynamicDialogConfig) {}

  onRename(): void {
    this.config.data.close(this.newName);
  }
}
