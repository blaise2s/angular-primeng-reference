import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { DashboardModule } from '../../../dashboard/dashboard.module';
import { MenuModule } from '../menu/menu.module';
import { LayoutComponent } from './layout.component';
@NgModule({
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    ToastModule,
    MenuModule,
    DashboardModule,
  ],
  providers: [DialogService, MessageService, ConfirmationService],
})
export class LayoutModule {}
