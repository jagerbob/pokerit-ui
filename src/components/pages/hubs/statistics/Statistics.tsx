import { fibonnaciDeck } from '../../../../constants/decks';
import styles from './Statistics.module.scss';

export type Props = {
  cards?: number[]
  points?: number[]
}

export const Statistics = ({cards = fibonnaciDeck, points = []} : Props) => {

  const validPoints = points.filter((p) => p >= 0);

  return (
    <div className={styles.statistics}>
      <div className={styles.graph}>
      </div>
      <div className={styles.mean}>
        <span>{(validPoints.length > 0) ? (validPoints.reduce((a,b) => a + b, 0) / validPoints.length) : 0}</span>
      </div>
      <div className={styles.cohesion}>
        
      </div>
    </div>
  )
}