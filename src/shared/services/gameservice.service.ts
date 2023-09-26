import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HandSign } from '../enum/hand-sign';
import { Game } from '../class/game';
import { Winner } from '../enum/winner';
import { History } from 'src/app/src/shared/class/history';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private baseUrl = 'http://localhost:8080/game';
  private history$ = new BehaviorSubject<any>({});
  history = this.history$.asObservable();

  constructor(private http: HttpClient) {}

  fetchList() {
    this.http.get<History>(`${this.baseUrl}`).subscribe((data) => {
      this.history$.next(data);
    });
  }

  getHistory(): Observable<any> {
    return this.history$.asObservable();
  }

  getResult(playerHand: HandSign): Observable<Game> {
    return this.http.post<Game>(`${this.baseUrl}/result`, playerHand, {}).pipe(
      map((data) => {
        var player = data.player.toString();
        var npc = data.npc.toString();
        var winner = data.winner.toString();
        this.fetchList();

        return new Game(
          HandSign[player as keyof typeof HandSign],
          HandSign[npc as keyof typeof HandSign],
          Winner[winner as keyof typeof Winner]
        );
      })
    );
  }

  deleteHistory() {
    this.http.delete(`${this.baseUrl}`).subscribe((res) => {
      this.fetchList();
    });
  }
}
