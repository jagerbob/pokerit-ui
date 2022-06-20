import { faFloppyDisk } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import cn from "classnames";

import styles from "./UsernameSelector.module.scss";
import { faCheck, faPencil, faRightToBracket, faTurnDown } from "@fortawesome/free-solid-svg-icons";

export type Props = {
  username?: string;
  onChange?: (username: string) => void;
};

export const UsernameSelector = ({ username, onChange }: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [localUsername, setLocalUsername] = useState<string>(username ?? "");

  const onSave = () => {
    setIsEditing(false);
    if(onChange) {
      onChange(localUsername);
    }
  }

  return (
    <>
      <form className={styles.usernameForm}>
        {!isEditing && (
          <>
            <span className={styles.playingAs}>Playing as {localUsername}</span>
            <FontAwesomeIcon
              className={styles.control}
              icon={faPencil}
              size="lg"
              onClick={() => setIsEditing(true)}
            />
          </>
        )}

        {isEditing && (
          <>
            <input
              className={cn(styles.username, {
                [styles.editing]: isEditing,
              })}
              value={localUsername}
              type="text"
              name="name"
              onChange={(v) => setLocalUsername(v.target.value)}
              readOnly={!isEditing}
            />
            <FontAwesomeIcon
              className={styles.control}
              icon={faCheck}
              size="lg"
              onClick={onSave}
            />
          </>
        )}
      </form>
    </>
  );
};
