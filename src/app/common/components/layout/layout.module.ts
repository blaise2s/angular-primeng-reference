import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { AreasModule } from 'src/app/areas/areas.module';
import { ECommerceModule } from 'src/app/e-commerce/e-commerce.module';
import { FilesModule } from 'src/app/files/files.module';
import { LocationsModule } from 'src/app/locations/locations.module';
import { StorefrontModule } from 'src/app/storefront/storefront.module';
import { DashboardModule } from '../../../dashboard/dashboard.module';
import { MenuModule } from '../menu/menu.module';
import { LayoutComponent } from './layout.component';
@NgModule({
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    MenuModule,
    DashboardModule,
    ECommerceModule,
    StorefrontModule,
    LocationsModule,
    AreasModule,
    FilesModule,
    ToastModule,
  ],
  providers: [DialogService, MessageService, ConfirmationService],
})
export class LayoutModule {}
