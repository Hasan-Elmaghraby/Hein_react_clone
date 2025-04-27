import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

interface Props {
  content: string;
  image: string;
}

export const SectionCard: React.FC<Props> = ({ content, image }) => {
  return (
    <Link to={""} className={styles.sectionCard}>
      <figure>
        <img src={image} alt="" />
      </figure>
      <p className={styles.content}>{content}</p>
    </Link>
  );
};
