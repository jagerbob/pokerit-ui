import styles from './Aurora.module.scss'

export const Aurora = ({children}: {children: JSX.Element[] | JSX.Element}) => {
  
  return (
    <div className={styles.auroraBg}>
      <div className={styles.container}>
        <div className={styles.hue}></div>
        <div className={styles.hue}></div>
        <div className={styles.hue}></div>
        <div className={styles.hue}></div>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}