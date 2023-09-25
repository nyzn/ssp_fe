import { HandSign } from '../enum/hand-sign';
import { Winner } from '../enum/winner';

export class Game {
  player: HandSign;
  npc: HandSign;
  winner: Winner;
}
