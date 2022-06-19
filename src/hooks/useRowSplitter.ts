import { useMemo } from "react"
import { Player } from "../types/Player"

export const useRowSplitter = (players: Player[]) => useMemo(() => {
  return {
    row1: players.filter((_, index) => !(index % 2)),
    row2: players.filter((_, index) => index % 2)
  } 
}, [players.map((p) => p.id)])