import { useParams } from "react-router";
import { Header } from "../../common/Header";
import { Card } from "./Card";
import styles from "./Hub.module.scss";
import text from '../../../i18n'
import { StartBtn } from "./buttons/StartBtn";
import { Drawer } from "./drawer/Drawer";
import { fibonnaciDeck } from "../../../constants/decks";
import { useRowSplitter } from "../../../hooks/useRowSplitter";
import { Statistics } from "./statistics/Statistics";
import { useGameState } from "../../../hooks/useGameState";
import { useSignalRHub } from "../../../hooks/useSignalRHub";
import { GameState } from "../../../types/GameState";

export const Hub = () => {
  const { hubId } = useParams();
  const { gameState, setVote, startVote, stopVote } = useGameState('AHOU', hubId);
  const { row1, row2 } = useRowSplitter(gameState?.players ?? [])

  return (
    <div className={styles.hub}>
      <Header />
      <div className={styles.body}>
        <div className={styles.tableContainer}>
          <div className={styles.seatRow}>
            {row1.map((p) => (
              <div className={styles.player}><span>{p.username}</span></div>
            ))}
          </div>
          <div className={styles.table}>
            <div className={styles.cardRow}>
              {row1.map((p) => (
                <Card points={p.vote} picked={p.isReady} isVisible={gameState?.phase === "showing"}/>
              ))}
            </div>
            <div className={styles.controls}>
              {(gameState?.phase === "idle" || gameState?.phase === "showing") && 
                <StartBtn text={text.pages.hubs.startVoting} onClick={startVote}/>
              }
              {gameState?.phase === "voting" && 
                <StartBtn text={text.pages.hubs.stopVoting} onClick={stopVote}/>
              }
            </div>
            <div className={styles.cardRow}>
              {row2.map((p) => (
                <Card points={p.vote} picked={p.isReady} isVisible={gameState?.phase === "showing"}/>
              ))}
            </div>
          </div>
          <div className={styles.seatRow}>
            {row2.map((p) => (
              <div className={styles.player}><span>{p.username}</span></div>
            ))}
          </div>
        </div>
        {gameState?.phase === "voting" &&
          <Drawer cards={fibonnaciDeck} selected={1} onSelect={setVote}/>
        }
        {gameState?.phase === "showing" &&
          <Statistics cards={fibonnaciDeck} points={gameState?.players?.map((p) => p.vote ?? -1) ?? []}/>
        }
      </div>
    </div>
  );
};
