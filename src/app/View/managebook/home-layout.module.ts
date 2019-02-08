import { ManagebookviewComponent } from './../managebook/managebookview/managebookview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutRouterModule } from './home-layout-router.module';

@NgModule({
  declarations: [ManagebookviewComponent],
  imports: [
    CommonModule,
    HomeLayoutRouterModule
  ]
})
export class HomeLayoutModule { }
