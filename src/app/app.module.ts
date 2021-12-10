import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllocationModule } from './allocation/allocation.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { LayoutModule } from './layout/layout.module';
import { LoginModule } from './login/login.module';
import { MenuModule } from './menu/menu.module';
import { SignupModule } from './signup/signup.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    SignupModule,
    LayoutModule,
    MenuModule,
    DashboardModule,
    AllocationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
