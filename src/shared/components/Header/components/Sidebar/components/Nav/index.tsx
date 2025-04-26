import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { Dropdown } from "./Dropdown";

export const Nav = () => {
  const { t } = useTranslation();

  return (
    <nav className={styles.nav}>
      <ul className={styles.headerList}>
        <li className={`${styles.listItem} ${styles.active}`}>
          <a href="#">{t("header.home")}</a>
        </li>
        <li className={styles.listItem}>
          <a href="#">{t("header.about")}</a>
        </li>
        <li className={styles.listItem}>
          <Dropdown />
        </li>
        <li className={styles.listItem}>
          <a href="#">{t("header.lastAds")} </a>
        </li>
        <li className={styles.listItem}>
          <a href="#">{t("header.contact")} </a>
        </li>
      </ul>
    </nav>
  );
};
