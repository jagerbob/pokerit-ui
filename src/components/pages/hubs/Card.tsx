import styles from "./Card.module.scss";
import cn from "classnames";

export type Props = {
  points?: number;
  picked?: boolean;
  isVisible?: boolean;
};

export const Card = ({ points, picked, isVisible }: Props) => (
  <div className={cn(styles.card, {[styles.picked]: picked})}>
    <span className={cn(styles.points, {[styles.visible]: isVisible})}>
      {points === -2 ? '?' : points}
    </span>
  </div>
);
