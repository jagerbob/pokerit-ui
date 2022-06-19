import { Player } from "./Player";

export type GameSession = {
  id?: string; 
  phase?: 'idle'|'voting'|'showing';
  players?: Player[];
  creationTime?: string;
}