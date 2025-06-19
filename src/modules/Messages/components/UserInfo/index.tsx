import React from "react";
import styles from "./styles.module.scss";

interface Props {
  onClick: () => void;
  description: string;
  user: {
    userName: string;
    userImage: string;
    is_readed: boolean;
    time: string;
  };
}

export const UserInfo: React.FC<Props> = ({
  user: { userName, userImage, is_readed, time },
  description,
  onClick,
}) => {
  return (
    <div className={styles.userInfoWrapper} onClick={onClick}>
      <div className={styles.userInfo}>
        <div className={styles.userWrapper}>
          <figure className={styles.userImage}>
            <img src={userImage} alt={userName} />
          </figure>
          <div className={styles.userNameWrapper}>
            <h3 className={styles.name}>{userName}</h3>
            <p className={styles.time}>{time}</p>
          </div>
        </div>
        {!is_readed && (
          <div className={styles.unreadedMessage}>
            <span>{1}</span>
          </div>
        )}
      </div>
      <p className={styles.description}>
        {description ?? "لا يوجد نص من قبل المستخدم"}
      </p>
    </div>
  );
};
