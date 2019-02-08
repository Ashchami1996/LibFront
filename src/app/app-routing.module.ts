import { AuthService } from './service/auth-service/auth.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './service/auth-service/auth.guard';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: 'src/app/View/Dashboard/dashboard-layout.module#DashboardLayoutModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: 'src/app/View/login/login-layout.module#LoginLayoutModule'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
