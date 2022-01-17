import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Upload } from '../../interfaces/upload.interfaces';
import {
  Script,
  ScriptArg,
} from './interfaces/script-selector-state.interfaces';
import { ScriptSelectorStateService } from './services/script-selector-state.service';

@Component({
  selector: 'bz-script-selector',
  templateUrl: './script-selector.component.html',
  styleUrls: ['./script-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScriptSelectorComponent implements OnInit {
  state = this.scriptSelectorStateService.state();
  selectedScript: Script | undefined;
  requiredNumArgs: number | undefined = undefined;
  selectedArgs: { [key: number]: Upload } = {};

  constructor(
    private readonly scriptSelectorStateService: ScriptSelectorStateService,
    private readonly config: DynamicDialogConfig
  ) {}

  get numSelectedArgs(): number {
    return Object.keys(this.selectedArgs).length;
  }

  ngOnInit(): void {
    this.scriptSelectorStateService.initializeState();
  }

  onCancel(): void {
    this.config.data.close();
  }

  onRunScript(): void {
    if (this.selectedScript) {
      this.config.data.close({
        scriptId: this.selectedScript.id,
        file1Id: this.selectedArgs[0].id,
        file2Id: this.selectedArgs[1].id,
        file3Id: this.selectedArgs[2].id,
      });
    }
  }

  onScriptChange(): void {
    this.requiredNumArgs = this.selectedScript
      ? this.selectedScript.numArgs
      : undefined;
  }

  onArgChange(scriptArg: ScriptArg, value: Upload): void {
    this.selectedArgs[scriptArg.order] = value;
  }
}
