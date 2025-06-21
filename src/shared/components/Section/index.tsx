import React from "react";
import styles from "./styles.module.scss";
import { Container } from "../Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  noContainer?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  noContainer,
  id,
}) => {
  return (
    <section id={id} className={`${styles.section} ${className ?? ""}`}>
      {!noContainer ? <Container>{children}</Container> : children}
    </section>
  );
};
