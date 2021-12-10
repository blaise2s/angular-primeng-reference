import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AllocationComponent } from './allocation.component';

@NgModule({
  declarations: [AllocationComponent],
  exports: [AllocationComponent],
  imports: [CommonModule],
})
export class AllocationModule {}
