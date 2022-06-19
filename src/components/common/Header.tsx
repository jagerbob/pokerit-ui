import { SecondaryBtn } from "../controls/SecondaryBtn";
import styles from "./Header.module.scss";
import text from '../../i18n'
import { useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h1>{text.header.appName}</h1>
      </div>
      <div className={styles.navBar}>
        <SecondaryBtn text={text.header.startANewGame} onClick={() => navigate('/hubs')}/>
      </div>
    </div>
  );
}
