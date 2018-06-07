import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShintoService {

  transaction = { action:'', amount: 0, value: 0 }
  
  ledger = []
  
  shintoCoin = { amount: 0, value: 0 }

  constructor() { }

  addToLedger(action, amt, val){
    this.transaction.action = action
    this.transaction.amount = amt
    this.transaction.value = val
    this.ledger.push(this.transaction)
    this.transaction = { action:'', amount: 0, value: 0 }
  }

  mineCoin(){
    this.shintoCoin.value++
    this.shintoCoin.amount++
    let val = this.shintoCoin.value    
    this.addToLedger("mined", 1, val)
  }

  buyCoin(num){
    this.shintoCoin.value++
    this.shintoCoin.amount += num
    let val = this.shintoCoin.value
    this.addToLedger("bought", num, val)
  }

  sellCoin(num){
    this.shintoCoin.value--
    this.shintoCoin.amount -= num
    if ( this.shintoCoin.value < 0 ) { this.shintoCoin.value = 0 }
    let val = this.shintoCoin.value
    this.addToLedger("sold", num, val)
  }

}
