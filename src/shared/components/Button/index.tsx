import React from "react";
import styles from "./styles.module.scss";

interface Props {
  text: string;
  type: string;
}

export const Button: React.FC<Props> = ({ text, type }) => {
  return (
    <button
      className={`${styles.btn} ${type === "hero" && styles.hero} ${
        type === "primary" && styles.btn
      }`}
    >
      {text}
    </button>
  );
};
