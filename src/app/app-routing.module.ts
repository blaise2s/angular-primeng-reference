import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/auth/guards/auth.guard';
import { LoginSignupGuard } from './common/auth/guards/login-signup.guard';
import { LayoutComponent } from './common/components/layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardGuard } from './dashboard/dashboard.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UploadGuard } from './upload/guards/upload.guard';
import { UploadComponent } from './upload/upload.component';

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
        path: 'upload',
        pathMatch: 'full',
        component: UploadComponent,
        canActivate: [UploadGuard],
        canLoad: [UploadGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
