import React from "react";
import styles from "./styles.module.scss";

interface Props {
  text: string;
  hero?: boolean;
}

export const MainButton: React.FC<Props> = ({ text, hero }) => {
  return (
    <button className={`${styles.btn} ${hero && styles.hero}`}>{text}</button>
  );
};
