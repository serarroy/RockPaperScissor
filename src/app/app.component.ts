
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
//import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'rock-paper-scissor';
  result: string = "";

  jugada:string = "";
  scores = {
    computer: 0,
    player: 0
  };

  choices = ['rock', 'paper', 'scissor']


  constructor(){}

  ngOnInit(): void {
    this.result = "Esperando jugada...";
  }

  random() {
    return Math.floor(Math.random() * this.choices.length);
  }

  play(answer: string) {
    const computer = this.choices[this.random() | 0];
    const match = computer + '_' + answer;
    
    this.jugada = 'Computer chooses ' + computer + "."
    switch(match) {
      case 'rock_paper':
      case 'paper_scissor':
      case 'scissor_rock':
        this.result = 'You win!';
        this.scores.player++;
        break;
      case 'paper_rock':
      case 'scissor_paper':
      case 'rock_scissor':
        this.result = 'Computer wins!';
        this.scores.computer++;
        break;
      default:
        this.result = 'Draw!';
        this.scores.computer++;
        this.scores.player++;
    }
  }

  reset() {
    this.scores.computer = 0;
    this.scores.player = 0;
    this.jugada = "";
    this.result = "";
  }
}