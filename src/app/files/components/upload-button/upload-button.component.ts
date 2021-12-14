import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'bz-upload-button',
  templateUrl: './upload-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadButtonComponent {
  @Input() disabled: boolean | undefined;
  @Output() upload: EventEmitter<void> = new EventEmitter();

  onClick(): void {
    this.upload.emit();
  }
}
