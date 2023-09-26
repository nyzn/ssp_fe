import { Game } from 'src/shared/class/game';

export class History {
  games: Game[];
  playerWins: number;
  npcWins: number;
  ties: number;

  constructor(
    games: Game[],
    playerWins: number,
    npcWins: number,
    ties: number
  ) {
    this.games = games;
    this.playerWins = playerWins;
    this.npcWins = npcWins;
    this.ties = ties;
  }
}
