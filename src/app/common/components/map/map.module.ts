import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingModule } from '../loading/loading.module';
import { MapComponent } from './map.component';
@NgModule({
  declarations: [MapComponent],
  exports: [MapComponent],
  imports: [CommonModule, LoadingModule],
})
export class MapModule {}
