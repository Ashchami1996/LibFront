import { DashViewComponent } from './dash-view/dash-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: DashViewComponent,
    children : [
      {
        path : 'home',
        loadChildren : 'src/app/View/home/home-layout.module#HomeLayoutModule'
      },
      {
        path : 'student',
        loadChildren : 'src/app/View/managestudent/home-layout.module#HomeLayoutModule'
      },
      {
        path : 'book',
        loadChildren : 'src/app/View/managebook/home-layout.module#HomeLayoutModule'
      },
      {
        path : 'search',
        loadChildren : 'src/app/View/searchbook/home-layout.module#HomeLayoutModule'
      },
      {
        path : 'issue',
        loadChildren : 'src/app/View/manageissuebook/home-layout.module#HomeLayoutModule'
      },
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardLayoutRouterModule { }
