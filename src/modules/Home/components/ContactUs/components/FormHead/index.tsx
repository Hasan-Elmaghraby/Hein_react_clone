import React from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  description: string;
}

export const FormHead: React.FC<Props> = ({ title, description }) => {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </>
  );
};
