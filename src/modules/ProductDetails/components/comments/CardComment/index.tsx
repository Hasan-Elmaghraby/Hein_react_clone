import React from "react";
import styles from "./styles.module.scss";

interface Props {
  userImage: string;
  userName: string;
  time: string;
  comment: string;
}

export const CardComment: React.FC<Props> = ({
  userImage,
  userName,
  time,
  comment,
}) => {
  return (
    <div className={styles.cardComment}>
      <div className={styles.userWrapper}>
        <figure className={styles.image}>
          <img src={userImage} alt={userName} />
        </figure>
        <div className={styles.userInfo}>
          <h4 className={styles.name}>{userName}</h4>
          <p className={styles.time}>{time}</p>
        </div>
      </div>
      <p className={styles.comment}>{comment}</p>
    </div>
  );
};
