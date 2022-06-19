import { useState } from "react";
import { useParams } from "react-router";
import { Header } from "../../common/Header";
import { Card } from "./Card";
import styles from "./Hub.module.scss";
import text from '../../../i18n'
import { StartBtn } from "./buttons/StartBtn";
import { Drawer } from "./drawer/Drawer";
import { fibonnaciDeck } from "../../../constants/decks";
import { GameState } from "../../../types/GameState";
import { useRowSplitter } from "../../../hooks/useRowSplitter";
import { Statistics } from "./statistics/Statistics";

const localGameState: GameState = {
  phase: 'idle',
  players: [
    {
      id: "jksnakjsnzakjsn",
      username: 'AHOU 🐺',
      vote: -2,
      isReady: true
    },
    {
      id: "jksnakjsazsnzakjsn",
      username: 'ASCH',
      vote: 7,
      isReady: true
    },
    {
      id: "jksnakjsazsnzakjsn",
      username: 'MME',
      vote: -1,
      isReady: false
    },
    {
      id: "jksnakjsazsnzakjsn",
      username: 'MME',
      vote: 3,
      isReady: true
    },
    {
      id: "jksnakjsazsnzakjsn",
      username: 'MME',
      vote: 5,
      isReady: true
    },
    {
      id: "jksnakjsazsnzakjsn",
      username: 'MME',
      vote: 10,
      isReady: true
    },
    {
      id: "jksnakjsazsnzakjsn",
      username: 'MME',
      vote: 5,
      isReady: true
    },
    {
      id: "jksnakjsazsnzakjsn",
      username: 'MME',
      vote: 5,
      isReady: true
    },
    {
      id: "jksnakjsazsnzakjsn",
      username: 'MME',
      vote: 5,
      isReady: true
    },
    {
      id: "jksnakjsazsnzakjsn",
      username: 'MME',
      vote: 5,
      isReady: true
    },
  ]
}

export const Hub = () => {
  const { hubId } = useParams();
  const [ gameState, setGameState ] = useState<GameState>(localGameState);
  const [ card, setCard ] = useState<number>(-1);
  const { row1, row2 } = useRowSplitter(gameState.players)

  const onStartVoting = () => {
    setGameState((gameState) => ({...gameState, phase: 'voting'}));
  }

  const onStopVoting = () => {
    setGameState((gameState) => ({...gameState, phase: 'showing'}));
  }

  const onCardChoose = (card: number) => {
    console.log(`Choosed card: ${card}`);
    setCard(card);
  }

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
                <StartBtn text={text.pages.hubs.startVoting} onClick={onStartVoting}/>
              }
              {gameState?.phase === "voting" && 
                <StartBtn text={text.pages.hubs.stopVoting} onClick={onStopVoting}/>
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
          <Drawer cards={fibonnaciDeck} selected={card} onSelect={onCardChoose}/>
        }
        {gameState?.phase === "showing" &&
          <Statistics cards={fibonnaciDeck} points={gameState?.players?.map((p) => p.vote ?? -1) ?? []}/>
        }
      </div>
    </div>
  );
};
