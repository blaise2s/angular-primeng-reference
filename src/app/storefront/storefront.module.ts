import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StorefrontComponent } from './storefront.component';

@NgModule({
  declarations: [StorefrontComponent],
  exports: [StorefrontComponent],
  imports: [CommonModule],
})
export class StorefrontModule {}
