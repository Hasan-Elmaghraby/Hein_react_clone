import React from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  titleIcon: React.ReactNode;
  desc: string;
  price?: boolean;
}

export const PackagesCard: React.FC<Props> = ({ title, titleIcon, desc,price }) => {
  return (
    <div className={styles.packagesCard}>
      <h3 className={styles.title}>
        {titleIcon}
        {title}
      </h3>
      <p className={`${styles.description} ${ price && styles.price}`}>{desc}</p>
    </div>
  );
};
