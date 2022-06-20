import { SecondaryBtn } from "../controls/SecondaryBtn";
import styles from "./Header.module.scss";
import text from "../../i18n";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import cn from "classnames";
import { UsernameSelector } from "./UsernameSelector";
import { useGlobalState } from "../../context/globalContext";

export type Props = {
  allowNameChange?: boolean;
};

export const Header = ({ allowNameChange }: Props) => {
  const navigate = useNavigate();
  const {username, setUsername} = useGlobalState();
  
  const changeUsername = (username: string) => {
    console.log("CHANGING : " + username);
    setUsername(username);
  }

  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h1>{text.header.appName}</h1>
      </div>
      <div className={styles.navBar}>
        {allowNameChange &&<UsernameSelector username={username} onChange={changeUsername}/>}
        <div className={styles.newGameBtn}>
          <SecondaryBtn text={text.header.startANewGame} onClick={() => navigate("/hubs")}/>
        </div>
      </div>
    </div>
  );
};
