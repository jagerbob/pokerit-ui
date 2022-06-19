import { fibonnaciDeck } from '../../../../constants/decks';
import styles from './Statistics.module.scss';

export type Props = {
  cards?: number[]
  points?: number[]
}

export const Statistics = ({cards = fibonnaciDeck, points = []} : Props) => {

  return (
    <div className={styles.statistics}>
      <div className={styles.graph}>
      </div>
      <div className={styles.mean}>
        <span>{points.reduce((a,b) => a + b, 0) / points.length}</span>
      </div>
      <div className={styles.cohesion}>
        
      </div>
    </div>
  )
}