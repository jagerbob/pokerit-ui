import { useEffect, useState } from "react"
import { GameSession } from "../types/GameSession"
import { useSignalRHub } from "./useSignalRHub";

export const useGameState = (username: string, hubId?: string) => {
  const [ gameSession, setGameSession ] = useState<GameSession>({});
  const { hub } = useSignalRHub();

  useEffect(() => {
    if(hub){
      hub.on("SessionUpdated", (gameSession: GameSession) => {
        console.log("received an update");
        setGameSession(gameSession)
      })
      hub.invoke("Join", username, hubId);
    }
  }, [hub, hubId, username])

  const setVote = (vote: number) => {
    if(hub){
      hub.invoke("SetVote", gameSession.id, vote);
    }
  }

  const startVote = () => {
    if(hub){
      hub.invoke("StartVote", gameSession.id);
    }
    console.log("vote");
  }

  const stopVote = () => {
    if(hub){
      hub.invoke("StopVote", gameSession.id);
    }
  }

  return { gameSession, setVote, startVote, stopVote }
}