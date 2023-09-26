import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/shared/class/game';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.scss'],
})
export class HistoryItemComponent implements OnInit {
  private baseClassName: string = 'history-item';

  @Input() game: Game;

  classNames: string = '';
  playerHandIcon: string = '';
  npcHandIcon: string = '';

  ngOnInit(): void {
    this.playerHandIcon = this.game.player + '-icon';
    this.npcHandIcon = this.game.npc + '-icon';

    this.classNames = `${this.baseClassName} ${this.baseClassName}--${this.game.winner}`;
  }
}
