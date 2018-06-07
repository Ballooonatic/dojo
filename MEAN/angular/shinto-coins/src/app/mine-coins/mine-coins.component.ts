import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-mine-coins',
  templateUrl: './mine-coins.component.html',
  styleUrls: ['./mine-coins.component.css']
})
export class MineCoinsComponent implements OnInit {

  algorithms = [
    { question: 'What is the 7th number in the Fibonacci Sequence?', answer: '13' },
    { question: 'What is the name of the programming technique that is for implementing lexically scoped name binding in a language with first-class functions?', answer: 'Closure' },
    { question: 'Write the name of the algorithm challenge that is described as follows: Print the numbers from 1 to 100. But for every number divisble by 3, print "Fizz", and for every number divisible by 5, print "Buzz". For numbers divisible by both 3 and 5, print "FizzBuzz."', answer: 'FizzBuzz' }
  ]

  algo_idx = 0;

  currentAlgo = this.algorithms[this.algo_idx]

  message = '';

  constructor(private _shintoService: ShintoService) { }

  ngOnInit() {}

  setCurrentAlgo(){
    this.currentAlgo = this.algorithms[this.algo_idx]    
  }

  incrementAlgoIdx(){
    this.algo_idx > 1 ? this.algo_idx = 0 : this.algo_idx++;
  }

  onSubmit(ans){    
    if (ans === this.currentAlgo.answer){
      this.incrementAlgoIdx();
      this.setCurrentAlgo();
      this._shintoService.mineCoin()
      this.message = "Great job!"
    } else {
      this.message = "Oops, that's not quite right. Try again?"
    }
  }

}
