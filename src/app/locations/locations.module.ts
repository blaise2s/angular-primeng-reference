import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { LoadingModule } from '../common/components/loading/loading.module';
import { MapModule } from '../common/components/map/map.module';
import { ScriptSelectorModule } from '../common/components/script-selector/script-selector.module';
import { LocationsComponent } from './locations.component';

@NgModule({
  declarations: [LocationsComponent],
  exports: [LocationsComponent],
  imports: [
    CommonModule,
    LoadingModule,
    ButtonModule,
    RippleModule,
    MapModule,
    ScriptSelectorModule,
  ],
})
export class LocationsModule {}
