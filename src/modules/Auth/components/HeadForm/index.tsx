import React from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  desc: string;
}

export const HeadForm: React.FC<Props> = ({ title, desc }) => {
  return (
    <div className={styles.headForm}>
      <h1 className={styles.title}>{title} </h1>
      <p className={styles.description}>{desc}</p>
    </div>
  );
};
