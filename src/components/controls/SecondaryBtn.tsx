import styles from './SecondaryBtn.module.scss'

export type Props = {
  text?: string;
  onClick?: () => void;
}

export const SecondaryBtn = ({text, onClick}: Props) => (
  <button className={styles.secondaryBtn} onClick={onClick}>{text}</button>
)