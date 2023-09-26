import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/shared/services/gameservice.service';
import { Game } from 'src/shared/class/game';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss'],
})
export class HistoryListComponent implements OnInit {
  public games: Game[];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.history.subscribe((data) => (this.games = data.games));
  }

  deleteHistory() {
    console.log('API CALL DELERTE HISTORY');
    this.gameService.deleteHistory();
  }
}
