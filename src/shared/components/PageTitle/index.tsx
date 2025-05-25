import React from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  center?: boolean;
}
export const PageTitle: React.FC<Props> = ({ title, center }) => {
  return (
    <h1 className={`${styles.title} ${center && styles.center}`}>{title}</h1>
  );
};
