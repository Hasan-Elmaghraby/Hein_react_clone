import React from "react";
import styles from "./styles.module.scss";
import { Container } from "../Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  noContainer?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  noContainer,
}) => {
  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      {!noContainer ? <Container>{children}</Container> : children}
    </section>
  );
};
