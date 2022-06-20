import { useEffect, useState } from "react"
import { GameSession } from "../types/GameSession"
import { useSignalRHub } from "./useSignalRHub";

export const useGameState = (username: string, hubId?: string) => {
  const [ gameSession, setGameSession ] = useState<GameSession>({});
  const { hub } = useSignalRHub();

  useEffect(() => {
    if(hub){
      hub.on("SessionUpdated", (gameSession: GameSession) => setGameSession(gameSession))
      hub.invoke("Join", username, hubId);
    }
  }, [hub, hubId, username])
  
  useEffect(() => {
    if(gameSession) {
      window.addEventListener('beforeunload', leave);
    }
    return () => {
      window.removeEventListener('beforeunload', leave);
    }
  }, [gameSession])

  const join = () => {
    hub?.on("SessionUpdated", (gameSession: GameSession) => setGameSession(gameSession))
    hub?.invoke("Join", username, hubId);
  }

  const setVote = (vote: number) => hub?.invoke("SetVote", gameSession.id, vote);

  const startVote = () => hub?.invoke("StartVote", gameSession.id);

  const stopVote = () => hub?.invoke("StopVote", gameSession.id);

  const leave = () => hub?.invoke("Leave", gameSession.id);

  return { gameSession, join, setVote, startVote, stopVote, leave }
}