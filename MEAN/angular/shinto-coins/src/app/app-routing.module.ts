import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { BrowseLedgerComponent } from './browse-ledger/browse-ledger.component';
import { BuyCoinsComponent } from './buy-coins/buy-coins.component';
import { HomeComponent } from './home/home.component';
import { MineCoinsComponent } from './mine-coins/mine-coins.component';
import { SellCoinsComponent } from './sell-coins/sell-coins.component';

const routes: Routes = [

  { path: 'browse-ledger',        component: BrowseLedgerComponent },
  { path: 'buy-coins',        component: BuyCoinsComponent },
  { path: 'home',         component: HomeComponent },
  { path: 'mine-coins', component: MineCoinsComponent },
  { path: 'sell-coins',       component: SellCoinsComponent },
  // { path: '', pathMatch: 'full', redirectTo: '/page-not-found' },
  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }