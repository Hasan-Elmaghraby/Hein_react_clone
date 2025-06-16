import React from "react";
import styles from "./styles.module.scss";

interface Props {
  description: string;
  user: {
    userName: string;
    userImage: string;
    userRate: string;
    time: string;
  };
}

export const UserInfo: React.FC<Props> = ({
  user: { userName, userImage, userRate, time },
  description,
}) => {
  return (
    <div className={styles.userInfoWrapper}>
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
        <div className={styles.unreadedMessage}>
          <span>{userRate}</span>
        </div>
      </div>
      <p className={styles.description}>
        {description ?? "لا يوجد نص من قبل المستخدم"}
      </p>
    </div>
  );
};
