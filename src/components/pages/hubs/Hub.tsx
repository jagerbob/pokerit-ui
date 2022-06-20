import { useNavigate, useParams } from "react-router";
import { Header } from "../../common/Header";
import styles from "./Hub.module.scss";
import text from '../../../i18n'
import { StartBtn } from "./buttons/StartBtn";
import { Drawer } from "./drawer/Drawer";
import { fibonnaciDeck } from "../../../constants/decks";
import { useRowSplitter } from "../../../hooks/useRowSplitter";
import { Statistics } from "./statistics/Statistics";
import { useGameState } from "../../../hooks/useGameState";
import { useEffect } from "react";
import { Card } from "./items/Card";
import { Player } from "./items/Player";
import { CopyLinkBtn } from "./buttons/CopyLinkBtn";
import { ConfigBtn } from "./buttons/ConfigBtn";
import { useGlobalState } from "../../../context/globalContext";

export const Hub = () => {
  const { hubId } = useParams();
  const { username } = useGlobalState();
  const { gameSession, vote, startVote, stopVote, setVote } = useGameState(username, hubId);
  const { row1, row2 } = useRowSplitter(gameSession?.players ?? []);
  const navigate = useNavigate();

  useEffect(() => {
    if(gameSession?.id){
      console.log("TEST");
      navigate(`/hubs/${gameSession?.id}`, { replace: true });
    }
  }, [gameSession?.id])

  return (
    <div className={styles.hub}>
      <Header allowNameChange/>
      <div className={styles.body}>
        <div className={styles.tableContainer}>
          <div className={styles.seatRow}>
            {row1.map((p) => <Player username={p.username}/>)}
          </div>
          <div className={styles.table}>
            <div className={styles.cardRow}>
              {row1.map((p) => (
                <Card points={p.vote} picked={p.isReady} isVisible={gameSession?.phase === "showing"}/>
              ))}
            </div>
            <div className={styles.controls}>
              <ConfigBtn/>
              {(gameSession?.phase === "idle" || gameSession?.phase === "showing") && 
                <StartBtn text={text.pages.hubs.startVoting} onClick={startVote}/>
              }
              {gameSession?.phase === "voting" && 
                <StartBtn text={text.pages.hubs.stopVoting} onClick={stopVote}/>
              }
              <CopyLinkBtn url={window.location.href}/>
            </div>
            <div className={styles.cardRow}>
              {row2.map((p) => (
                <Card points={p.vote} picked={p.isReady} isVisible={gameSession?.phase === "showing"}/>
              ))}
            </div>
          </div>
          <div className={styles.seatRow}>
            {row2.map((p) => <Player username={p.username}/>)}
          </div>
        </div>
        {gameSession?.phase === "voting" &&
          <Drawer cards={fibonnaciDeck} selected={vote} onSelect={setVote}/>
        }
        {gameSession?.phase === "showing" &&
          <Statistics cards={fibonnaciDeck} points={gameSession?.players?.map((p) => p.vote ?? -1) ?? []}/>
        }
      </div>
    </div>
  );
};
