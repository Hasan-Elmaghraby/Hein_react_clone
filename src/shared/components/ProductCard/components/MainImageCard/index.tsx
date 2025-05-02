import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import imageN from "@public/images/chat/noData.png";

interface Props {
  mainImage: string;
  title: string;
  categoryName: string;
}

export const MainImageCard: React.FC<Props> = ({
  mainImage,
  title,
  categoryName,
}) => {
  return (
    <Link className={styles.mainImageLink} to="/profile">
      <figure className={styles.image}>
        <img src={mainImage || imageN} alt={title} />
      </figure>
      <span className={styles.categoryName}>{categoryName}</span>
    </Link>
  );
};
