import React from "react";
import styles from "./styles.module.scss";

interface Props {
  text: string;
  type: string;
  onClick?: () => void;
  closeModal?: boolean;
}

export const Button: React.FC<Props> = ({ text, type, onClick }) => {
  return (
    <button
      className={`${styles.btn} ${type === "hero" && styles.hero} ${
        type === "primary" && styles.btn
      } ${type === "logout" && styles.logout}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
