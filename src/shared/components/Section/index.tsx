import React from "react";
import styles from "./styles.module.scss";

interface SectionProps {
  children: React.ReactNode;
  className?: string; 
}

export const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      {children}
    </section>
  );
};
