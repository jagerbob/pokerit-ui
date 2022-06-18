import styles from './ActionBtn.module.scss'
import cn from 'classnames'

export type Props = {
  text?: string;
  onClick?: () => void;
}

export const ActionBtn = ({text, onClick}: Props) => (
  <span className={styles.btnWrapper}>
    <button className={cn(styles.actionBtn, styles.squareAnimatedBtn)} onClick={onClick}>{text}</button>
  </span>
)