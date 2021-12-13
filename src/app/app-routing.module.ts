import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllocationComponent } from './allocation/allocation.component';
import { AllocationGuard } from './allocation/allocation.guard';
import { AuthGuard } from './auth/guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardGuard } from './dashboard/dashboard.guard';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { ECommerceGuard } from './e-commerce/e-commerce.guard';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { StorefrontGuard } from './storefront/storefront.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    canActivate: [DashboardGuard],
    canLoad: [DashboardGuard],
    children: [{ path: '', pathMatch: 'full', component: DashboardComponent }],
  },
  {
    path: 'allocation',
    component: LayoutComponent,
    canActivate: [AllocationGuard],
    canLoad: [AllocationGuard],
    children: [{ path: '', pathMatch: 'full', component: AllocationComponent }],
  },
  {
    path: 'e-commerce',
    component: LayoutComponent,
    canActivate: [ECommerceGuard],
    canLoad: [ECommerceGuard],
    children: [{ path: '', pathMatch: 'full', component: ECommerceComponent }],
  },
  {
    path: 'storefront',
    component: LayoutComponent,
    canActivate: [StorefrontGuard],
    canLoad: [StorefrontGuard],
    children: [{ path: '', pathMatch: 'full', component: StorefrontComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
