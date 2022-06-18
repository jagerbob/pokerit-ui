import { SecondaryBtn } from "../controls/SecondaryBtn";
import styles from "./Header.module.scss";
import text from '../../i18n'

export const Header = () => (
  <div className={styles.header}>
    <div className={styles.title}>
      <h1>{text.header.appName}</h1>
    </div>
    <div className={styles.navBar}>
      <SecondaryBtn text={text.header.startANewGame}/>
    </div>
  </div>
);
