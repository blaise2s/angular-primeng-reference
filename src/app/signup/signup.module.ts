import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SignupComponent } from './signup.component';

@NgModule({
  declarations: [SignupComponent],
  exports: [SignupComponent],
  imports: [CommonModule, RouterModule, ButtonModule, RippleModule],
})
export class SignupModule {}
