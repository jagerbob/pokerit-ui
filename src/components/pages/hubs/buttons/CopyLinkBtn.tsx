import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CopyLinkBtn.module.scss";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import cn from 'classnames';
import text from '../../../../i18n'

export type Props = {
  url: string;
};

export const CopyLinkBtn = ({ url }: Props) => {
  const [tooltip, setTooltip] = useState<boolean>(false);

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    setTooltip(true);
    setTimeout(() => setTooltip(false), 2000);
  }

  return (
    <div className={styles.btnContainer}>
      <button className={styles.copyLinkBtn} onClick={copyLink}>
        <FontAwesomeIcon icon={faLink} size="lg" />
      </button>
      <div className={cn(styles.tooltip, {[styles.visible]: tooltip})}>
        <span>{text.pages.hubs.linkCopied}</span>
      </div>
    </div>
  );
};
