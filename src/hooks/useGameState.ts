import { useEffect, useState } from "react"
import { GameState } from "../types/GameState"
import { useSignalRHub } from "./useSignalRHub";

const temp: GameState = {
  phase: 'idle',
  players: [
    {
      id: "jksnakjsnzakjsn",
      username: 'AHOU 🐺',
      vote: -2,
      isReady: true
    }
  ]
}

export const useGameState = (username: string, hubId?: string) => {
  const [ gameState, setGameState ] = useState<GameState>({});
  const { hub } = useSignalRHub();

  useEffect(() => {
    if(hub){
      hub.on("UpdateGameState", (gameState: GameState) => setGameState(gameState))
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

  return { gameState, setVote, startVote, stopVote }
}