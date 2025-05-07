import React from "react";
import styles from "./styles.module.scss";
import { StarIcon } from "@/shared/icons/Star";
import { useTranslation } from "react-i18next";

interface Props {
  userImage: string;
  userName: string;
  rateNumber: string;
}

export const UserInfo: React.FC<Props> = ({
  userImage,
  userName,
  rateNumber,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.userInfo}>
      <figure className={styles.userImage}>
        {userImage && <img src={userImage} alt={userName} />}
      </figure>
      <div className={styles.userNameWrapper}>
        <div className={styles.userName}>
          <h4 className={styles.title}>
            {t("productDetails.announcerDetails")}
          </h4>
          <p className={styles.name}>{userName}</p>
        </div>
        <div className={styles.rate}>
          <StarIcon />

          <p className={styles.rateNumber}>{rateNumber}</p>
        </div>
      </div>
    </div>
  );
};
