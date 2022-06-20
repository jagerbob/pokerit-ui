import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ConfigBtn.module.scss";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import cn from 'classnames';
import text from '../../../../i18n'


export const ConfigBtn = () => {
  const [tooltip, setTooltip] = useState<boolean>(false);

  const config = () => {
    setTooltip(true);
    setTimeout(() => setTooltip(false), 2000);
  }

  return (
    <div className={styles.btnContainer}>
      <button className={styles.configBtn} onClick={config}>
        <FontAwesomeIcon icon={faGear} size="lg" />
      </button>
      <div className={cn(styles.tooltip, {[styles.visible]: tooltip})}>
        <span>{text.pages.hubs.requireADLC}</span>
      </div>
    </div>
  );
};
