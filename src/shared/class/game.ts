import { HandSign } from '../enum/hand-sign';
import { Winner } from '../enum/winner';

export class Game {
  player: HandSign;
  npc: HandSign;
  winner: Winner;

  constructor(player: HandSign, npc: HandSign, winner: Winner) {
    this.player = player;
    this.npc = npc;
    this.winner = winner;
  }
}
