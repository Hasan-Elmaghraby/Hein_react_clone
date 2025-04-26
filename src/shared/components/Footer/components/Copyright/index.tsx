
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

export const Copyright = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.copyright}>
      <span> &copy; </span>
      {t("footer.copyright")}
    </div>
  );
};
