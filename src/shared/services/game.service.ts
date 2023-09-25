import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private baseUrl = 'http://localhost:8080/game';

  constructor(private http: HttpClient) {}

  getHistory(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
