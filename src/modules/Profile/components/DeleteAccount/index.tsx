import styles from "./styles.module.scss";
import { TrashIcon } from "@/shared/icons/Trash";
import { useTranslation } from "react-i18next";

export const DeleteAccount = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.deleteAccount}>
      <div className={styles.trashIconWrapper}>
        <TrashIcon />
        <p className={styles.text}>{t("account.changePassword")}</p>
      </div>
    </div>
  );
};
