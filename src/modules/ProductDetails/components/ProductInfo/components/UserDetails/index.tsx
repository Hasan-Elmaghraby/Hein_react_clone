import React from "react";
import styles from "./styles.module.scss";

import { UserInfo } from "./components/UserInfo";
import { Email } from "@/shared/icons/Email";
import { useTranslation } from "react-i18next";
import { CallIcon } from "@/shared/icons/Call";

interface Props {
  userName: string;
  rateNumber: string;
  userImage: string;
  userMail: string;
  userPhone: string;
  userId: number;
}

export const UserDetails: React.FC<Props> = ({
  userImage,
  userName,
  rateNumber,
  userMail,
  userPhone,
  userId,
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.userDetails}>
      <UserInfo
        userImage={userImage}
        userName={userName}
        rateNumber={rateNumber}
        userId={userId}
      />
      <a className={styles.userMail} href={`mailto: ${userMail}`}>
        <Email />
        <p className={styles.text}>{t("productDetails.mail")}</p>
      </a>
      <a className={styles.userPhone} href={`tel: ${userPhone}`}>
        <CallIcon />
        <p className={styles.text}>{t("productDetails.call")}</p>
      </a>
    </div>
  );
};
