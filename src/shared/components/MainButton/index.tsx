import React from "react";
import styles from "./styles.module.scss";

interface Props {
  text: string;
  type: string;
  onClick?: () => void;
  closeModal?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<Props> = ({ text, type, onClick, icon }) => {
  return (
    <button
      className={`${styles.btn} ${type === "hero" && styles.hero} ${
        type === "primary" && styles.btn
      } ${type === "danger" && styles.danger}
      ${type === "edit" && styles.edit}`}
      onClick={onClick}
    >
      {icon} {text}
    </button>
  );
};
