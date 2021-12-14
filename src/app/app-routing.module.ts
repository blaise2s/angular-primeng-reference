import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasComponent } from './areas/areas.component';
import { AreasGuard } from './areas/areas.guard';
import { AuthGuard } from './common/auth/guards/auth.guard';
import { LoginSignupGuard } from './common/auth/guards/login-signup.guard';
import { LayoutComponent } from './common/components/layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardGuard } from './dashboard/dashboard.guard';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { ECommerceGuard } from './e-commerce/e-commerce.guard';
import { FilesComponent } from './files/files.component';
import { FilesGuard } from './files/guards/files.guard';
import { LocationsGuard } from './locations/guards/locations.guard';
import { LocationsComponent } from './locations/locations.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { StorefrontGuard } from './storefront/storefront.guard';

const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
    canActivate: [LoginSignupGuard],
    canLoad: [LoginSignupGuard],
  },
  {
    path: 'signup',
    pathMatch: 'full',
    component: SignupComponent,
    canActivate: [LoginSignupGuard],
    canLoad: [LoginSignupGuard],
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: DashboardComponent,
        canActivate: [DashboardGuard],
        canLoad: [DashboardGuard],
      },
      {
        path: 'e-commerce',
        pathMatch: 'full',
        component: ECommerceComponent,
        canActivate: [ECommerceGuard],
        canLoad: [ECommerceGuard],
      },
      {
        path: 'storefront',
        pathMatch: 'full',
        component: StorefrontComponent,
        canActivate: [StorefrontGuard],
        canLoad: [StorefrontGuard],
      },
      {
        path: 'locations',
        pathMatch: 'full',
        component: LocationsComponent,
        canActivate: [LocationsGuard],
        canLoad: [LocationsGuard],
      },
      {
        path: 'areas',
        pathMatch: 'full',
        component: AreasComponent,
        canActivate: [AreasGuard],
        canLoad: [AreasGuard],
      },
      {
        path: 'files',
        pathMatch: 'full',
        component: FilesComponent,
        canActivate: [FilesGuard],
        canLoad: [FilesGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
