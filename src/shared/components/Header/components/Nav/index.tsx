import React from "react";
import styles from "./styles.module.scss";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="#">الرئيسية</a>
        </li>
        <li>
          <a href="#">من نحن </a>
        </li>
        <li>
          <a href="#">الأقسام</a>
        </li>
        <li>
          <a href="#">أحدث الاعلانات </a>
        </li>
        <li>
          <a href="#">تواصل معنا </a>
        </li>
      </ul>
    </nav>
  );
};
