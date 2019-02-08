import { DashViewComponent } from './dash-view/dash-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutRouterModule } from './dashboard-layout-router.module';


@NgModule({
  declarations: [DashViewComponent],
  imports: [
    CommonModule,
    DashboardLayoutRouterModule
  ]
})
export class DashboardLayoutModule { }
