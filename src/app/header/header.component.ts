import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/shared/services/gameservice.service';
import { History } from '../src/shared/class/history';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public history: History;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.fetchList();
    this.gameService.history.subscribe((data) => (this.history = data));
  }
}
