import { Component, OnInit } from '@angular/core';
import { Game } from 'src/shared/class/game';
import { GameService } from 'src/shared/services/game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public history: Array<Game> = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.history = new Array();

    this.gameService.getHistory().subscribe(
      (data) => {
        this.history = data;
      },
      (error) => console.log('ERROR by getHistory', error)
    );
  }
}
