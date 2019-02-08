import { StudentService } from './service/StudentService';
import { AuthGuard } from './service/auth-service/auth.guard';
import { AuthService } from './service/auth-service/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './View/login/login/login.component';
import { HomeComponent } from './View/home/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DashViewComponent } from './View/Dashboard/dash-view/dash-view.component';
import { ManagebookviewComponent } from './View/managebook/managebookview/managebookview.component';
import { ManagestuviewComponent } from './View/managestudent/managestuview/managestuview.component';
import { ManageissuebkviewComponent } from './View/manageissuebook/manageissuebkview/manageissuebkview.component';
import { SearchbkviewComponent } from './View/searchbook/searchbkview/searchbkview.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AuthService, AuthGuard, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
