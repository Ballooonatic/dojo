import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';


@Component({
  selector: 'app-sell-coins',
  templateUrl: './sell-coins.component.html',
  styleUrls: ['./sell-coins.component.css']
})
export class SellCoinsComponent implements OnInit {

  shintoCoin = this._shintoService.shintoCoin
  message = ''
  
  constructor(private _shintoService: ShintoService) { }
  
  ngOnInit() {
  }

  onSubmit(amt){
    if (amt === "")                   { return this.message = "The amount can't be empty!" }
    const num = +amt; // The unary operator converts the string to a number.
    if (amt === undefined)            { return this.message = "The amount can't be empty!" }
    if (amt === null)                 { return this.message = "The amount can't be empty!" }
    if (amt < 1)                      { return this.message = "The amount must be more than 0." }
    if (amt > 50)                     { return this.message = "The amount must be 50 or less." }
    if (typeof amt !== 'number')      { return this.message = "How did you even manage that?" }
    if (amt > this.shintoCoin.amount) { return this.message = "You don't have enough ShintoCoins to sell!" }

    this.message = '';
    this._shintoService.sellCoin(num)
  }

}