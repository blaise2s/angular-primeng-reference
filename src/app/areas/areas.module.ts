import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AreasComponent } from './areas.component';

@NgModule({
  declarations: [AreasComponent],
  exports: [AreasComponent],
  imports: [CommonModule],
})
export class AreasModule {}
