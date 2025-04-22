import React from "react";
import styles from "./styles.module.scss";

interface LogoProps {
  logo: string;
}

export const Logo: React.FC<LogoProps> = ({ logo }) => {
  return (
    <a href="/" className={styles.logo}>
      <img src={logo} alt="logo" />
    </a>
  );
};
