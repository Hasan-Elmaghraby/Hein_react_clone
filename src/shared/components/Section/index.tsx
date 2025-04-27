import React from "react";
import styles from "./styles.module.scss";

interface children {
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<children> = ({ children, ...props }) => {
  return (
    <section className={styles.section} {...props}>
      {children}
    </section>
  );
};
