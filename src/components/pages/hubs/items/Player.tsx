import styles from './Player.module.scss'

export type Props = {
  username?: string;
}

export const Player = ({username}: Props) => {
  return (
    <div className={styles.player}>
      <div className={styles.username}>
        <span>{username}</span>
      </div>
    </div>
  );
}