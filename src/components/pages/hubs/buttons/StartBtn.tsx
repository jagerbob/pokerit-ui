import styles from './StartBtn.module.scss'

export type Props = {
  text?: string;
  onClick?: () => void;
}

export const StartBtn = ({text, onClick}: Props) => (
  <button className={styles.startBtn} onClick={onClick}>{text}</button>
)