import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import imageSec from "@public/images/chat/noData.png";

interface Props {
  id: number | string;
  content: string;
  image: string;
  name: string;
}

export const SectionCard: React.FC<Props> = ({ content, image, id, name }) => {
  return (
    <Link
      to={`/sections/${id}`}
      state={{ sectionName: name }}
      className={styles.sectionCard}
    >
      <figure className={styles.image}>
        <img src={image && imageSec} alt="" />
      </figure>
      <p className={styles.content}>{content}</p>
    </Link>
  );
};
