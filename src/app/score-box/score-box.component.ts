import { Component, Input } from '@angular/core';
import { History } from '../src/shared/class/history';

@Component({
  selector: 'app-score-box',
  templateUrl: './score-box.component.html',
  styleUrls: ['./score-box.component.scss'],
})
export class ScoreBoxComponent {
  @Input() history: History;

  constructor() {}
}
