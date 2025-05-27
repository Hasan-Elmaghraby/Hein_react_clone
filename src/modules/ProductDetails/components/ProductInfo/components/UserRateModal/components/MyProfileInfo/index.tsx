import React from "react";
import styles from "./styles.module.scss";
import { StarIcon } from "@/shared/icons/Star";
import { useTranslation } from "react-i18next";

interface Props {
  userName: string;
  userImage: string;
  rateNumber: string;
}

export const MyProfileInfo: React.FC<Props> = ({
  userName,
  userImage,
  rateNumber,
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.profileInfoWrapper}>
      <figure className={styles.profileImage}>
        <img src={userImage} alt={userName} />
      </figure>
      <div className={styles.profileInfo}>
        <h3 className={styles.infoTitle}>
          {t("productDetails.announcerFullRate")}
        </h3>
        <h3 className={styles.name}>{userName}</h3>
        <div className={styles.ratesWrapper}>
          <div className={styles.rates}>
            <StarIcon /> <span>{rateNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
