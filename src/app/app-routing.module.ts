import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './comps/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MybankComponent } from './comps/mybank/mybank.component';
import { TransactionhistoryComponent } from './comps/transactionhistory/transactionhistory.component';
import { ConnectbankComponent } from './comps/connectbank/connectbank.component';
import { PaymenttransferComponent } from './comps/paymenttransfer/paymenttransfer.component';


const routes:Routes =[
  // {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'', component: HomeComponent},
  // {path:'home', component: HomeComponent},
  {path:'mybank', component: MybankComponent},
  {path:'transactionhistory', component: TransactionhistoryComponent},
  {path:'paymenttransfer', component: PaymenttransferComponent},
  {path:'connectbank', component: ConnectbankComponent}
]
@NgModule({
  // declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
