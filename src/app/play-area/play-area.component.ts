import { Component, OnInit } from '@angular/core';
import { HandSign } from 'src/shared/enum/hand-sign';
import { Winner } from 'src/shared/enum/winner';
import { GameService } from 'src/shared/services/gameservice.service';

@Component({
  selector: 'app-play-area',
  templateUrl: './play-area.component.html',
  styleUrls: ['./play-area.component.scss'],
})
export class PlayAreaComponent implements OnInit {
  HandSign = HandSign;
  Winner = Winner;

  playerHand?: HandSign;
  npcHand?: HandSign;
  gameState?: Winner;

  isBig: boolean = true;
  showChoices: boolean = false;
  showResults: boolean = false;

  constructor(private gameService: GameService) {}

  ngOnInit() {}

  async gameStart(playerHandSign: HandSign) {
    this.gameService.getResult(playerHandSign).subscribe(
      (data) => {
        this.gameState = data.winner;
        this.playerHand = data.player;
        this.npcHand = data.npc;
        this.showChoices = true;
        this.showResults = true;
      },

      (error) => console.log('ERROR by getResult', error)
    );
  }

  restartGame() {
    this.gameState = undefined;
    this.showChoices = false;
    this.showResults = false;
  }
}
