import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './signin/login/login.component';
import { SignupComponent } from './signin/signup/signup.component';
import { SidebarComponent } from './shsared/sidebar/sidebar.component';
import { HomeComponent } from './comps/home/home.component';
import { AppRoutingModule } from './app-routing.module';

import { MybankComponent } from './comps/mybank/mybank.component';
import { TransactionhistoryComponent } from './comps/transactionhistory/transactionhistory.component';
import { PaymenttransferComponent } from './comps/paymenttransfer/paymenttransfer.component';
import { ConnectbankComponent } from './comps/connectbank/connectbank.component';
import { ChaseComponent } from './comps/home/chase/chase.component';
import { BankOfAmericaComponent } from './comps/home/bank-of-america/bank-of-america.component';
import { PlatypusComponent } from './comps/home/platypus/platypus.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HistoryComponent } from './shsared/history/history.component'
// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SidebarComponent,
    HomeComponent,
    MybankComponent,
    TransactionhistoryComponent,
    PaymenttransferComponent,
    ConnectbankComponent,
    ChaseComponent,
    BankOfAmericaComponent,
    PlatypusComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
    // RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
