import React from "react";
import styles from "./styles.module.scss";

interface Props {
  fromme: boolean;
  userImage: string;
  userName: string;
  created_at: string;
  message: string;
}

export const Message: React.FC<Props> = ({
  fromme,
  userImage,
  userName,
  created_at,
  message,
}) => {
  return (
    <div className={`${styles.message} ${!fromme && styles.reciever}`}>
      <div className={styles.withFigure}>
        {!fromme && (
          <div className={styles.recieveImageWrapper}>
            <figure className={styles.recieverImage}>
              <img src={userImage} alt={userName} loading="lazy" />
            </figure>
            <p className={styles.recieverName}>{userName}</p>
          </div>
        )}
        <p className={styles.time}>{created_at}</p>
      </div>
      <p className={styles.text}>{message}</p>
    </div>
  );
};
