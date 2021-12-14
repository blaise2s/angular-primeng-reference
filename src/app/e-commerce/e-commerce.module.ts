import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ECommerceComponent } from './e-commerce.component';

@NgModule({
  declarations: [ECommerceComponent],
  exports: [ECommerceComponent],
  imports: [CommonModule],
})
export class ECommerceModule {}
