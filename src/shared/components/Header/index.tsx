import React from "react";
import { Search } from "./Search";
import styles from "./styles.module.scss";
import logo from "@public/images/logo.png";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <figure className={styles.logo}>
          <img src={logo} alt="logo" />
        </figure>
        <nav>
          <ul className={styles.headerNav}>
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
        <div className={styles.buttons}>
          <Search />
        </div>
      </div>
    </header>
  );
};
