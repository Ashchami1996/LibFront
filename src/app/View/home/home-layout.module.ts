import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutRouterModule } from './home-layout-router.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeLayoutRouterModule
  ]
})
export class HomeLayoutModule { }
