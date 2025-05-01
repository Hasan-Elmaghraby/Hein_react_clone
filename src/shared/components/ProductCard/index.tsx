import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { FavoritesIcon } from "@/shared/icons/Favorites";
import imageN from "@public/images/chat/noData.png";
import { useTranslation } from "react-i18next";

interface Props {
  mainImage: string;
  userImage: string;
  categoryName: string;
  title: string;
  userName: string;
  price: string;
  time: string;
  area: string;
}

export const ProductCard: React.FC<Props> = ({
  mainImage,
  title,
  userName,
  userImage,
  categoryName,
  price,
  time,
  area,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.productCard}>
      <Link className={styles.mainImageLink} to="/profile">
        <figure className={styles.image}>
          <img src={mainImage || imageN} alt={title} />
        </figure>
        <span className={styles.categoryName}>{categoryName}</span>
      </Link>

      <div className={styles.info}>
        <Link className={styles.titleLink} to="/profile">
          <h3 className={styles.title}>{title}</h3>
        </Link>

        <p className={styles.description}>
          {time}
          {`${area ? "   / " : ""}${area ?? ""}`}
        </p>

        <div className={styles.user}>
          <figure className={styles.userImage}>
            <img src={userImage} loading="lazy" alt={userName} />
          </figure>

          <h5 className={styles.userName}>{userName}</h5>
        </div>

        <div className={styles.footer}>
          <p className={styles.price}>
            {price}
            {t("currency")}
          </p>
          <figure className={styles.icon}>
            <FavoritesIcon />
          </figure>
        </div>
      </div>
    </div>
  );
};
