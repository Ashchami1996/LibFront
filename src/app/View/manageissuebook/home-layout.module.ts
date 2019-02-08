import { ManageissuebkviewComponent } from './manageissuebkview/manageissuebkview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutRouterModule } from './home-layout-router.module';

@NgModule({
  declarations: [ManageissuebkviewComponent],
  imports: [
    CommonModule,
    HomeLayoutRouterModule
  ]
})
export class HomeLayoutModule { }
