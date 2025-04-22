import React from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

export const Nav = () => {
  const { t } = useTranslation();
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={`${styles.listItem} ${styles.active}`}>
          <a href="#">{t("header.home")}</a>
        </li>
        <li className={styles.listItem}>
          <a href="#">{t("header.about")}</a>
        </li>
        <li className={styles.listItem}>
          <a href="#">{t("header.sections")}</a>
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
