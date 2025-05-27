import React from "react";
import styles from "./styles.module.scss";
import { StarIcon } from "@/shared/icons/Star";

interface Props {
  description: string;
  user: {
    userNameComment: string;
    userImageComment: string;
    userRateComment: string;
    timeComment: string;
  };
}

export const UserInfoModal: React.FC<Props> = ({
  user: { userNameComment, userImageComment, userRateComment, timeComment },
  description,
}) => {
  return (
    <div className={styles.userInfoWrapper}>
      <div className={styles.userInfo}>
        <div className={styles.userWrapper}>
          <figure className={styles.userImage}>
            <img src={userImageComment} alt={userNameComment} />
          </figure>
          <div className={styles.userNameWrapper}>
            <h3 className={styles.name}>{userNameComment}</h3>
            <p className={styles.time}>{timeComment}</p>
          </div>
        </div>
        <div className={styles.rateWrapper}>
          <div className={styles.rate}>
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className={`${styles.svg} ${
                  index < Math.floor(Number(userRateComment))
                    ? styles.active
                    : ""
                }`}
              >
                <StarIcon />
              </div>
            ))}
          </div>
          <span>{userRateComment}</span>
        </div>
      </div>
      <p className={styles.description}>
        {description ?? "لا يوجد نص من قبل المستخدم"}
      </p>
    </div>
  );
};
