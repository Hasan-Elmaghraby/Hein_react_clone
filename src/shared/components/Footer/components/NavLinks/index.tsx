import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

export const NavLinks = () => {
  const { t } = useTranslation();
  return (
    <nav className={styles.nav}>
  
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link to="/about">{t("footer.about")}</Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/commission">{t("footer.commission")}</Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/sections">{t("footer.sections")}</Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/lastAds">{t("footer.lastAds")}</Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/privacyPolicy">{t("footer.privacyPolicy")}</Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/useTreaty">{t("footer.useTreaty")}</Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/contactUs">{t("footer.contactWithUs")}</Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/login">{t("footer.login")}</Link>
        </li>
      </ul>
    </nav>
  );
};
