import { Player } from "./Player";

export type GameState = {
  phase: 'idle'|'voting'|'showing';
  players: Player[];
}