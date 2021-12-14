import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { LoadingComponent } from './loading.component';

@NgModule({
  declarations: [LoadingComponent],
  exports: [LoadingComponent],
  imports: [CommonModule, ProgressSpinnerModule],
})
export class LoadingModule {}
