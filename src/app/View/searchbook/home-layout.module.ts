import { SearchbkviewComponent } from './searchbkview/searchbkview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutRouterModule } from './home-layout-router.module';

@NgModule({
  declarations: [SearchbkviewComponent],
  imports: [
    CommonModule,
    HomeLayoutRouterModule
  ]
})
export class HomeLayoutModule { }
