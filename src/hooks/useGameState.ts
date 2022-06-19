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

  const setVote = (vote: number) => {
    console.log("Voting for : " + vote);
  }

  const startVote = () => {
    console.log("Starting votes");
  }

  const stopVote = () => {
    console.log("Stopping votes");
  }

  // setGameState(temp);

  return { gameSession, setVote, startVote, stopVote }
}