import { Component, Input } from '@angular/core';
import { Game } from 'src/shared/class/game';

@Component({
  selector: 'app-score-box',
  templateUrl: './score-box.component.html',
  styleUrls: ['./score-box.component.scss'],
})
export class ScoreBoxComponent {
  @Input() history: Array<Game> = [];

  constructor() {}
}
