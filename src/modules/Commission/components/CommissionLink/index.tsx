import { Link } from "react-router-dom";
import { DollarIcon } from "@/shared/icons/Dollar";
import { ChevronLeftIcon } from "@/shared/icons/ChevronLeft";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import React from "react";
export const CommissionLink = React.memo(() => {
  const { t } = useTranslation();
  return (
    <Link className={styles.commissionLink} to="/single-page/4">
      <div className={styles.linkStart}>
        <DollarIcon />
        <span>{t("commission.howToCalculateCommission")}</span>
      </div>
      <div className={styles.iconArrowWrap}>
        <ChevronLeftIcon />
      </div>
    </Link>
  );
});
