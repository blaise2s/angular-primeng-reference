import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingModule } from '../common/components/loading/loading.module';
import { LocationsComponent } from './locations.component';

@NgModule({
  declarations: [LocationsComponent],
  exports: [LocationsComponent],
  imports: [CommonModule, LoadingModule],
})
export class LocationsModule {}
