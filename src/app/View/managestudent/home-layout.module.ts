import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagestuviewComponent } from './managestuview/managestuview.component';
import { ManagebookviewComponent } from './../managebook/managebookview/managebookview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutRouterModule } from './home-layout-router.module';

@NgModule({
  declarations: [ManagestuviewComponent],
  imports: [
    CommonModule,
    HomeLayoutRouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeLayoutModule { }
