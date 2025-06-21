import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

export const NavLinks = () => {
  const { t } = useTranslation();
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a href="#about">{t("footer.about")}</a>
        </li>
        <li className={styles.listItem}>
          <Link to="/site-commission">{t("footer.commission")}</Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/sections">{t("footer.sections")}</Link>
        </li>
        <li className={styles.listItem}>
          <a href="#latestAds">{t("footer.lastAds")}</a>
        </li>
        <li className={styles.listItem}>
          <Link to="/single-page/2">{t("footer.privacyPolicy")}</Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/single-page/1">{t("footer.useTreaty")}</Link>
        </li>
        <li className={styles.listItem}>
          <a href="#contact">{t("footer.contactWithUs")}</a>
        </li>
        <li className={styles.listItem}>
          <Link to="/auth/login">{t("footer.login")}</Link>
        </li>
      </ul>
    </nav>
  );
};
