import { fibonnaciDeck } from "../../../../constants/decks";
import styles from "./Drawer.module.scss";
import cn from 'classnames'

export type Props = {
  cards?: number[];
  selected?: number;
  onSelect?: (card: number) => void;
};

export const Drawer = ({
  cards = fibonnaciDeck,
  selected = -1,
  onSelect = (card: number) => {},
}: Props) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.cardDrawer}>
        {cards.map((card) => (
          <div className={cn(styles.deckCard, {[styles.selected]: card === selected})} onClick={() => onSelect(card)}>
          <span className={styles.points}>{card}</span>
        </div>
        ))}
        <div className={cn(styles.deckCard, {[styles.selected]: -2 === selected})} onClick={() => onSelect(-2)}>
          <span className={styles.points}>?</span>
        </div>
      </div>
    </div>
  );
};
