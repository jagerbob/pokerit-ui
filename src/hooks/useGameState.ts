import { useEffect, useState } from "react"
import { GameSession } from "../types/GameSession"
import { useSignalRHub } from "./useSignalRHub";

export const useGameState = (username: string, hubId?: string) => {
  const [ gameSession, setGameSession ] = useState<GameSession>({});
  const [ userId, setUserId ] = useState<string>(); 
  const { hub } = useSignalRHub();

  useEffect(() => {
    if(hub && (!hubId || hubId !== gameSession?.id)){
      setUserId(hub.connectionId ?? "");
      hub.on("SessionUpdated", (gameSession: GameSession) => setGameSession(gameSession));
      hub.invoke("Join", username, hubId);
    }
  }, [hub, hubId])

  useEffect(() => {
    if(hub) {
      hub?.invoke("SetUsername", gameSession.id, username);
    }
  }, [username])

  useEffect(() => {
    if(gameSession) {
      window.addEventListener('beforeunload', leave);
    }
    return () => {
      window.removeEventListener('beforeunload', leave);
    }
  }, [gameSession])

  const vote = gameSession.players?.find((p) => p.id === hub?.connectionId)?.vote;

  const setVote = (vote: number) => hub?.invoke("SetVote", gameSession.id, vote);

  const startVote = () => hub?.invoke("StartVote", gameSession.id);

  const stopVote = () => hub?.invoke("StopVote", gameSession.id);

  const leave = () => hub?.invoke("Leave", gameSession.id);

  return { gameSession, vote, userId, setVote, startVote, stopVote, leave }
}