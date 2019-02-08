import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginLayoutRouterModule } from './login-layout-router.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginLayoutRouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginLayoutModule { }
