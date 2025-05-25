import styles from "./styles.module.scss";
import { LockIcon } from "@/shared/icons/Lock";
import { useTranslation } from "react-i18next";
import { ChevronLeftIcon } from "@/shared/icons/ChevronLeft";
import { Link } from "react-router-dom";
export const ChangePSWLink = () => {
  const { t } = useTranslation();
  return (
    <Link to="/auth/change-password" className={styles.changePSWLink}>
      <div className={styles.lockIconWrapper}>
        <LockIcon />
        <p className={styles.text}>{t("account.changePassword")}</p>
      </div>
      <div className={styles.arrowIcon}>
        <ChevronLeftIcon />
      </div>
    </Link>
  );
};
