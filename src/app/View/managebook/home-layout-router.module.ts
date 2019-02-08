import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ManagebookviewComponent } from '../managebook/managebookview/managebookview.component';



const routes: Routes = [
  {
    path: '',
    component: ManagebookviewComponent
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeLayoutRouterModule { }
