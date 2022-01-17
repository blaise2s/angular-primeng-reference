import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { RippleModule } from 'primeng/ripple';
import { LoadingModule } from '../loading/loading.module';
import { ScriptSelectorComponent } from './script-selector.component';

@NgModule({
  declarations: [ScriptSelectorComponent],
  exports: [ScriptSelectorComponent],
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    LoadingModule,
    DropdownModule,
    FormsModule,
  ],
})
export class ScriptSelectorModule {}
