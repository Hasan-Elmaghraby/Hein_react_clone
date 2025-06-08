import React from "react";
import styles from "./styles.module.scss";
import { WalletIcon } from "@/shared/icons/Wallet";
import { useTranslation } from "react-i18next";

interface Props {
  action: string;
  createdAt: string;
}
export const RechargedCard: React.FC<Props> = ({ action, createdAt }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.rechargedCard}>
      <div className={styles.headerCard}>
        <div className={styles.iconWrapper}>
          <WalletIcon />
        </div>
        <div className={styles.rechargedInfo}>
          <h3 className={styles.title}>{t("wallet.chargedSucceeded")}</h3>
          <p className={styles.time}>{createdAt}</p>
        </div>
      </div>
      <p className={styles.description}>{action}</p>
    </div>
  );
};
