import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TransactionComponent } from './transaction/transaction.component';
import { EmployeeComponent } from './employee/employee.component';
import { CustomersComponent } from './customers/customers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BranchesComponent } from './branches/branches.component';
import { EmpdashboardComponent } from './empdashboard/empdashboard.component';
import { HistoryComponent } from './history/history.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailsComponent } from './details/details.component';
import { EmphomeComponent } from './emphome/emphome.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    TransactionComponent,
    EmployeeComponent,
    CustomersComponent,
    NavbarComponent,
    BranchesComponent,
    EmpdashboardComponent,
    HistoryComponent,
    UserhomeComponent,
    RegistrationComponent,
    ProfileComponent,
    DetailsComponent,
    EmphomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
